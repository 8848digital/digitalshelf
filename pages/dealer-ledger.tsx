import React from 'react'
import styled from "../styles/DealerHomeAccounts.module.css";
import Accounts from '../components/DealerHomePage/Components/Accounts';
import Link from 'next/link';

import Faviconheader from '../components/Faviconheader/Faviconheader';
import DealerLedgerComp from '../components/DealerHomePage/Components/DealerLedgerCompMaster';

const GlAccountPage = () => {
  return (
    <>
    <Faviconheader/>
    <DealerLedgerComp/>
    </>
  )
}

export default GlAccountPage