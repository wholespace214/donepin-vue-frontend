<template>
  <div class="w-full min-h-screen flex-col items-start">
    <div class="mx-12 my-4 space-y-5 flex flex-col">
      <div class="" id="sample-logo">
        <img src="~/assets/images/sampleLogo.svg" alt="" />
      </div>

      <span class="" id="company-address">
        Company LLC Streetname 44 12221 New York, USA
      </span>

      <div id="company-detail" class="flex items-center justify-between">
        <p class="mb-0 w-40 pb-0">
          Client Company LLC Client Name Streetname of Company 9920028 Paris
          France
        </p>

        <div id="invoices-detail" class="flex flex-col space-y-1">
          <div class="flex capitalize space-x-2 justify-between">
            <span class="">invoice number:</span>
            <span class="font-semibold text-sm">INV-292983</span>
          </div>
          <div class="flex capitalize space-x-2 justify-between">
            <span class="">client number:</span>
            <span class="font-semibold text-sm">292983</span>
          </div>
          <div class="flex capitalize space-x-2 justify-between">
            <span class="">purchase order:</span>
            <span class="font-semibold text-sm">PO-29f322983</span>
          </div>
          <div class="flex capitalize space-x-2 justify-between">
            <span class="">date:</span>
            <span class="font-semibold text-sm">12.12.2021</span>
          </div>
        </div>
      </div>

      <div id="invoices-detail" class="flex mt-5 pt-5 space-y-3 flex-col">
        <span class="font-semibold text-sm">
          Invoice/Purchase order from 12.12.2021
        </span>
        <span>
          Herby we send you the invoice as shown below. Text will be replaced.
        </span>
      </div>

      <div id="invoices-detail" class="flex mt-10 flex-col space-y-2">
        <div
          class="flex border-b pb-3 capitalize justify-between"
          id="head-table"
        >
          <span class="">items / description</span>

          <div class="flex capitalize">
            <span class="w-24 flex justify-center">quantity</span>
            <span class="w-24 flex justify-center">unit price</span>
            <span class="w-24 flex justify-center">amount</span>
          </div>
        </div>

        <!-- First Data  -->
        <div
          class="flex border-b py-3 capitalize justify-between"
          id="head-table"
        >
          <div id="items" class="flex space-y-1 flex-col">
            <p class="mb-0 pb-0 font-semibold text-sm">
              logo design
            </p>
            <p class="mb-0 pb-0">
              creating project of new logo
            </p>
          </div>

          <div class="flex capitalize">
            <span class="flex justify-center w-24" id="quantity">2</span>
            <span class="flex justify-center w-24" id="unit-price"
              >12,00 €</span
            >
            <span class="flex justify-center w-24" id="amount">24,00 €</span>
          </div>
        </div>

        <!-- Second Data  -->
        <div
          class="flex border-b py-3 capitalize justify-between"
          id="head-table"
        >
          <div id="items" class="flex space-y-1 flex-col">
            <p class="mb-0 pb-0 font-semibold text-sm">
              video AD
            </p>
            <p class="mb-0 pb-0">
              Shooting, Editin anc Color correction for the Winter Commercial.
            </p>
          </div>

          <div class="flex capitalize">
            <span class="flex justify-center w-24" id="quantity">2</span>
            <span class="flex justify-center w-24" id="unit-price"
              >12,00 €</span
            >
            <span class="flex justify-center w-24" id="amount">24,00 €</span>
          </div>
        </div>

        <div class="w-full flex justify-end">
          <div class="flex flex-col space-y-2">
            <div class="flex capitalize">
              <span class="flex justify-center w-24" id="unit-price">
                subtotal
              </span>
              <span class="flex justify-center w-24" id="amount">24,00 €</span>
            </div>

            <div class="flex capitalize">
              <span class="flex justify-center w-24" id="unit-price">
                VAT (19 %)
              </span>
              <span class="flex justify-center w-24" id="amount">6,84 €</span>
            </div>

            <div class="flex items-center capitalize">
              <span class="flex justify-center w-24" id="unit-price">
                total
              </span>
              <span
                class="flex justify-center font-semibold text-lg w-24"
                id="amount"
                >42,00 €</span
              >
            </div>
          </div>
        </div>

        <p class="pb-0 mb-0">
          This is the note text sample written durin invoice creation. If note
          is empty, this will be hidden.
        </p>

        <p class="pb-0 font-bold text-[15px] mt-4 mb-0">
          Please pay the total amout of 42,84€ till 25.12.2021 in the Bank
          Account below:
        </p>

        <div class="w-full mt-5  flex flex-col space-y-1">
          <div class="flex flex-col w-42">
            <div class="flex capitalize space-x-5">
              <p class="mb-0 pb-0">
                bank:
              </p>
              <p class="mb-0 pb-0">
                bank logo
              </p>
            </div>

            <div id="receiver" class="flex capitalize space-x-5">
              <p class="mb-0 pb-0">
                receiver:
              </p>
              <p class="mb-0 pb-0">
                my name
              </p>
            </div>

            <div class="flex capitalize space-x-5">
              <p class="mb-0 pb-0">
                IBAN:
              </p>
              <p class="mb-0 pb-0">
                NBAI229292-29929
              </p>
            </div>

            <div class="flex capitalize space-x-5">
              <p class="mb-0 pb-0">
                BIC:
              </p>
              <p class="mb-0 pb-0">
                29292-29929
              </p>
            </div>

            <div class="flex capitalize space-x-5">
              <p class="mb-0 pb-0">
                refrendces:
              </p>
              <p class="mb-0 pb-0">
                REF-111991
              </p>
            </div>
          </div>
        </div>

        <div class="my-5 h-40">
          <p class="pb-0 text-sm ">
            Terms: This is Inoice Terms text added in the Settigs Page. If Terms
            is empty, this will be hidden.
          </p>
        </div>

        <div
          id="footer"
          class="border-t items-end mt-12 py-3 w-full flex justify-between"
        >
          <div class="w-48">
            My Compmany Name LLC Streetname 55 23483 NY, USA CEO: Thisis Myname
          </div>

          <div class="w-48">
            Email: info@maycompany.com Phone: +1 3049 8890 30 Web:
            www.company.com
          </div>

          <div class="w-48">
            VAT Number: 545412312 Reg Number: US4564123 Registered under UAA:
            41248
          </div>

          <div class="w-48">
            Bank: Logo Bank IBAN: 45651 456 545 6 BIC: 5451231
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
