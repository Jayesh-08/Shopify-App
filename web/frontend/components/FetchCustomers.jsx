import { Card, TextContainer } from "@shopify/polaris";
import { useEffect, useState } from "react";
import { useAuthenticatedFetch } from "../hooks";
import {CustomerItem} from "./CustomerItem"
import { ProductsCard } from "./ProductsCard";



export function FetchCustomers() {
  const fetch = useAuthenticatedFetch();
  const [cust, setCust] = useState([]);

  // const [isLoading, setIsLoading] = useState(true);

  // const [customer, setCustomer] = useState([]);


  const fetchCustomers = async () => {
    try {
      // setIsLoading(true);
      const response = await fetch("/api/customers")
      const json = await response.json();
      // setIsLoading(false);
      // setCustomer(json);

      json.map((a) => {
        
        console.log(a.first_name, a.last_name);

      })

      setCust(json);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCustomers();
    // eslint-disable-next-line
}, [])
  return (
    <>
      <Card>
        <TextContainer spacing="loose">
          <p>Hello World!</p>
          {/* {cust.map((element)=>{
            return <CustomerItem/>
          })} */}
          {/* {<CustomerItem/>} */}
        </TextContainer>
      </Card>
    </>
  );
}
