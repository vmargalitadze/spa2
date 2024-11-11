
import React from 'react';
import { Table, TableBody, TableCaption,  TableHeader, } from '@/components/ui/table';



import SignOut from './SignOut';
import Info from './Info';
import Row from './Row';


export const fetchCache = 'force-no-store';

function Admin() {
 

  return (
    <>
    
    
<div className="mt-[180px] w-full sm:p-4">
  <Table className="w-full sm:p-4">
    <TableCaption>A list of recent Reservations</TableCaption>
    <TableHeader>
  <Row />
    </TableHeader>
    <TableBody>
     <Info />
    </TableBody>
  </Table>
</div>

<SignOut />
    
    </>


  );
}




export default Admin;
