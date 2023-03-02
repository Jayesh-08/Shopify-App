import { useState } from "react";
import {
  Card,
  Heading,
  TextContainer,
  DisplayText,
  TextStyle,
} from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge-react";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";

export function Customers() {
  const [isLoading, setIsLoading] = useState(true);
  const fetch = useAuthenticatedFetch();

  const fetchCustomers = async()=>{
    setIsLoading(true);
    const response = await fetch("/admin/api/2023-01/customers.json");

    if(response.ok){
        console.log("Successful")
    }
    else{
        console.log("Not Success")
    }
  }
  return (
    <>
      <Card
        title="Product Counter"
        sectioned
        primaryFooterAction={{
          content: "Populate 5 products",
          onAction: fetchCustomers,
        }}
      >
        <TextContainer spacing="loose">
          <p>
            Sample products are created with a default title and price. You can
            remove them at any time.
          </p>
          <Heading element="h4">
            TOTAL PRODUCTS
          </Heading>
        </TextContainer>
      </Card>
    </>
  );
}
