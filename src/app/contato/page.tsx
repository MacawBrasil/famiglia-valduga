"use client";

import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { FormContact } from "@/components/FormContact";
import { Navbar } from "@/components/Navbar";
import { Wrapper } from "@/components/wrapper";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: -29.171571,
  lng: -51.181067,
};

export default function Contato() {
  return (
    <>
      <div className="relative w-screen bg-black pt-11 h-[894px] bg-hero-contact bg-cover bg-top">
        <Navbar />
        <Wrapper className="flex justify-between absolute -bottom-[132px] left-1/2 -translate-x-1/2">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col">
              <h1 className="text-white text-[88px] font-normal font-['Baskerville'] uppercase leading-[110px]">
                Fale <br />
                Conosco
              </h1>
              <p className="text-white text-lg font-normal font-['Montserrat'] leading-[27px]">
                Envie suas dúvidas e sugestões
              </p>
            </div>
            <div>
              <span className="text-ouro text-lg font-normal font-['Montserrat'] leading-[27px]">
                Entre em contato
              </span>
              <div className="text-white text-[26px] font-medium font-['Montserrat'] leading-[39px]">
                (54) 2105.3122
              </div>
            </div>
            <div>
              <span className="text-ouro text-lg font-normal font-['Montserrat'] leading-[27px]">
                Envie um e-mail
              </span>
              <div className="text-white text-[26px] font-medium font-['Montserrat'] leading-[39px]">
                faleconosco@casavalduga.com.br
              </div>
            </div>
            <div>
              <span className="text-ouro text-lg font-normal font-['Montserrat'] leading-[27px]">
                Faça parte da nossa equipe
              </span>
              <Button className="mt-4">Trabalhe conosco</Button>
            </div>
          </div>
          <FormContact />
        </Wrapper>
      </div>
      <div>
        <LoadScript
          googleMapsApiKey="AIzaSyANNESsO4kHnMMVPoARbu6-cv4sfnYwK1k"
          onError={(error) => console.log(error)}
        >
          <GoogleMap
            mapContainerClassName="contact-map"
            center={center}
            zoom={15}
          >
            <Marker
              position={{
                lat: -29.171571,
                lng: -51.181067,
              }}
              key={1}
            />
          </GoogleMap>
        </LoadScript>
      </div>
      <Footer />
    </>
  );
}
