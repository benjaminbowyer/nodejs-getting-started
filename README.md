# node.js getting started - an income tax calculator (copy)

This is a simple tax calculator for the purpose of learning how to expand on a simple program.

It works out the tax on an income using the [English and Welsh tax rates for 2022/23](https://www.gov.uk/income-tax-rates).

You can use this [online tax calculator](https://www.moneysavingexpert.com/tax-calculator/) to verify the tax for a given salary.

## Prerequisites

Make sure you have [node.js](https://nodejs.org/en/download/) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/) installed.

## Commands

### Install dependencies

Before you can run any other commands you need to install the dependencies for this project:

`yarn install`

### Running the tests

To the tests:

`yarn test:unit`

Or you can leave the tests running as you work:

`yarn watch`

### Running the calculator

`yarn start`

You will be prompted to enter your annual salary and then it will output the amount of tax you would pay.