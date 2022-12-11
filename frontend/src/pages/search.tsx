// src/pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from "next/link"
import { VStack, Heading, Box, UnorderedList, ListItem, Link} from "@chakra-ui/layout"
import { Text, Button } from '@chakra-ui/react'
import { useState, useEffect} from 'react'
import {ethers} from "ethers"

declare let window:any

const Search: NextPage = () => {

  return (
    <>
      <Head>
        <title>BitBlock</title>
      </Head>

      <Heading as="h3"  my={4}>Event and Ticketplatform</Heading>          
      <VStack>
        <Box w='100%' my={4}>
          <UnorderedList>
            <ListItem>
              <Link>
                Konzert Schüür - Mimiks und die starken Männer : 23.01.2023
              </Link>
            </ListItem>
            <ListItem>
              <Link>
                James Bond - Der Wald ist gross genug : 01.01.2023
              </Link>
            </ListItem>
            <ListItem>
              <Link>
                Weihnachtskonzert : 24.12.2023
              </Link>
            </ListItem>
          </UnorderedList>
        </Box>
      </VStack>
    </>
  )
}

export default Search