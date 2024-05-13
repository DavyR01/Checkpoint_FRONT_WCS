import Countries from "@/components/Countries";
import FormAddCountry from "@/components/FormAddCountry";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <FormAddCountry />
      <Countries />
    </div>
  )
}
