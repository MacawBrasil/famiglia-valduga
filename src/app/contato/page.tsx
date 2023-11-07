'use client';

import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';
import { FormContact } from '@/components/FormContact';
import { Navbar } from '@/components/Navbar';
import { Wrapper } from '@/components/wrapper';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const center = {
  lat: -29.171571,
  lng: -51.181067,
};

export default function Contato() {
  return (
    <>
      <div className="relative w-screen bg-black h-[894px] bg-hero-contact bg-cover bg-top lg:h-[1500px]">
        <Navbar />
        <Wrapper className="w-full flex justify-between flex-wrap absolute -bottom-[132px] left-1/2 -translate-x-1/2 lg:items-center lg:w-full lg:justify-center lg:text-center">
          <div className="flex flex-col gap-7 lg:items-center lg:mb-10 sm:w-full">
            <div className="flex flex-col sm:w-full sm:gap-3">
              <h1 className="text-white text-[88px] font-normal font-basker uppercase leading-[110px] sm:text-4xl sm:w-full">
                Fale <br />
                Conosco
              </h1>
              <p className="text-white text-lg font-normal font-mont leading-[27px]">
                Envie suas dúvidas e sugestões
              </p>
            </div>
            <div className="sm:w-full">
              <span className="text-ouro text-lg font-normal font-mont leading-[27px]">
                Entre em contato
              </span>
              <div className="text-white text-[26px] font-medium font-mont leading-[39px]">
                (54) 2105.3122
              </div>
            </div>
            <div className="w-full flex flex-wrap flex-col items-start justify-center">
              <span className="text-ouro text-lg font-normal font-mont leading-[27px]">
                Envie um e-mail
              </span>
              <a
                href="#"
                className="text-white text-[26px] font-medium font-mont leading-[39px] sm:w-full sm:text-center sm:text-lg">
                faleconosco@casavalduga.com.br
              </a>
            </div>
            <div className="lg:flex lg:flex-col lg:items-center lg:justify-center">
              <span className="text-ouro text-lg font-normal font-mont leading-[27px]">
                Faça parte da nossa equipe
              </span>
              <Button className="mt-4 font-mont text-sm font-normal">
                Trabalhe conosco
              </Button>
            </div>
          </div>
          <FormContact />
        </Wrapper>
      </div>
      <div>
        <LoadScript
          googleMapsApiKey="AIzaSyANNESsO4kHnMMVPoARbu6-cv4sfnYwK1k"
          onError={(error) => console.log(error)}>
          <GoogleMap
            mapContainerClassName="contact-map"
            center={center}
            zoom={15}>
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
