import {
  Page,
  Layout
} from "@shopify/polaris";

import {FetchCustomers} from "../components/";
import { TitleBar } from "@shopify/app-bridge-react";

export default function HomePage() {
  return (
    <Page narrowWidth>
      <TitleBar title="Customers" primaryAction={null} />
      <Layout>
        <Layout.Section>
        <FetchCustomers/>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
