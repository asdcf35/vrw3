'use client'
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import './class.css'
  import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

export default function App() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
    <Card className="col-span-12 sm:col-span-4 h-[300px]" isPressable onPress={() => console.log("item pressed")}>
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Plank #1</p>
        <h4 className="text-white font-medium text-large">Increasing Wages - Step by Step</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://cdn.shopify.com/s/files/1/2643/9914/files/5maYumusplHiebPzshiFlmeoc8vlo5qX1632332951.jpg?v=1632951145"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Plank #2</p>
        <h4 className="text-white font-medium text-large">Reforming Education</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://habitatbroward.org/wp-content/uploads/2020/01/10-Benefits-Showing-Why-Education-Is-Important-to-Our-Society.jpg"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Plank #3</p>
        <h4 className="text-white font-medium text-large">Gun Control</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://www.silencercentral.com/wp-content/uploads/2021/05/pexels-karolina-grabowska-5202438-scaled.jpg"
      />
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Plank #4</p>
        <h4 className="text-black font-medium text-2xl">Immigration</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="https://www.americanprogress.org/wp-content/uploads/sites/2/2021/10/ImmigrationPolicyPage.jpg"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">A novel way to solve immigration, one that doesn't compromise on security while not being harsh.</p>
        </div>
      </CardFooter>
    </Card>
    <Card isPressable onClick={onOpen} isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">National Security</p>
        <h4 className="text-white/90 font-medium text-xl">The US checklist for better security</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://api.army.mil/e2/c/images/2023/11/03/b4b385f7/size1.jpg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col marigold">
            <p className="text-tiny text-white/60">What we think the government should do first for national security.</p>
          </div>
        </div>
      </CardFooter>
    </Card>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
              </>
          )}
</ModalContent>
</Modal>
  </div>
  );
}


