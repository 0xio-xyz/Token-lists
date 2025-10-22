#!/usr/bin/env ts-node

import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import * as fs from 'fs';
import * as path from 'path';
import { TokenList, TokenInfo } from './types';

// Load schema and token list
const schemaPath = path.join(__dirname, '../schema.json');
const tokenListPath = path.join(__dirname, '../octra.tokenlist.json');

const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
const tokenList: TokenList = JSON.parse(fs.readFileSync(tokenListPath, 'utf8'));

// Initialize AJV
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

// Compile schema
const validate = ajv.compile(schema);

// Validate token list
const valid = validate(tokenList);

if (valid) {
  console.log('✅ Token list is valid!');

  // Additional checks
  console.log('\n📊 Token List Statistics:');
  console.log(`   Name: ${tokenList.name}`);
  console.log(`   Version: ${tokenList.version.major}.${tokenList.version.minor}.${tokenList.version.patch}`);
  console.log(`   Total Tokens: ${tokenList.tokens.length}`);
  console.log(`   Tags: ${Object.keys(tokenList.tags || {}).length}`);

  // Check for duplicate tokens
  const addresses = tokenList.tokens.map(
    (t: TokenInfo) => `${t.network}-${t.address.toLowerCase()}`
  );
  const uniqueAddresses = new Set(addresses);

  if (addresses.length !== uniqueAddresses.size) {
    console.log('\n⚠️  Warning: Duplicate token addresses found!');
    const duplicates = addresses.filter(
      (addr, index) => addresses.indexOf(addr) !== index
    );
    duplicates.forEach(dup => console.log(`   - ${dup}`));
    process.exit(1);
  } else {
    console.log('   ✓ No duplicate addresses');
  }

  // Check for missing logos
  const missingLogos = tokenList.tokens.filter((t: TokenInfo) => !t.logoURI);
  if (missingLogos.length > 0) {
    console.log('\n⚠️  Warning: Tokens missing logo URIs:');
    missingLogos.forEach((t: TokenInfo) =>
      console.log(`   - ${t.symbol} (${t.name})`)
    );
  } else {
    console.log('   ✓ All tokens have logo URIs');
  }

  // Validate addresses format
  console.log('\n🔍 Validating addresses...');
  let addressErrors = 0;
  tokenList.tokens.forEach((token: TokenInfo) => {
    if (token.address === 'native') {
      // Native token is OK
      return;
    }
    if (!token.address.startsWith('oct') || token.address.length !== 47) {
      console.error(`   ✗ Invalid address format: ${token.symbol} (${token.address})`);
      console.error(`     Expected: oct + 44 chars (total 47), got ${token.address.length} chars`);
      addressErrors++;
    }
  });

  if (addressErrors > 0) {
    console.log(`\n❌ Found ${addressErrors} address validation error(s)`);
    process.exit(1);
  } else {
    console.log('   ✓ All addresses valid');
  }

  // Check network (should be 'octra-testnet' for testnet)
  const invalidNetworks = tokenList.tokens.filter((t: TokenInfo) => t.network !== 'octra-testnet');
  if (invalidNetworks.length > 0) {
    console.log('\n⚠️  Warning: Tokens not on testnet (network should be "octra-testnet"):');
    invalidNetworks.forEach((t: TokenInfo) =>
      console.log(`   - ${t.symbol}: network ${t.network}`)
    );
  }

  console.log('\n✅ All validations passed!\n');
  process.exit(0);
} else {
  console.error('❌ Token list validation failed!\n');
  console.error('Errors:');
  if (validate.errors) {
    validate.errors.forEach(error => {
      console.error(`  - ${error.instancePath}: ${error.message}`);
      if (error.params) {
        console.error(`    ${JSON.stringify(error.params)}`);
      }
    });
  }
  process.exit(1);
}
