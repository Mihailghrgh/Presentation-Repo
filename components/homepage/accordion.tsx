import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";



const AccordionDemo = () => {
  return (
    <div className="md:flex row-span-1 px-0 md:px-40 space-x-20 py-10 space-y-10">
      <section className="w-full">
        <div className="space-y-10 text-center md:text-left md:space-y-1">
          <h1 className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent text-xl font-bold tracking-widest">
            OUR COMMITMENT TO EXCELLENCE:
          </h1>
          <h1 className="text-5xl font-serif">
            Honesty, Integrity, <span className="block">and Delivery</span>
          </h1>
          <p className="">
            At Radley James, our values are not merely words on a page but the
            guiding principles that shape every interaction, decision, and
            partnership we forge. Honesty, Integrity, and Delivery are the
            pillars of our commitment to excellence, ensuring that we uphold the
            highest standards in the recruitment industry.
          </p>
        </div>
      </section>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-2xl font-serif">
            Honesty
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We believe in transparent and open communication, providing our
              clients and candidates with the clarity and candour they deserve.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
              numquam maiores magni officiis eos tempora. Nesciunt delectus
              neque sunt modi nobis necessitatibus pariatur, nihil, in eligendi
              dolorum a voluptates molestias!
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-2xl font-serif">
            Integrity
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We adhere unwaveringly to ethical standards, safeguarding the
              interests of both our clients and candidates.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae adipisci, sint aliquam quaerat, ab dolor qui explicabo
              dignissimos molestiae possimus nam quod, nisi libero nihil minus
              tempora asperiores amet vitae.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-2xl font-serif">
            Delivery
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We measure our success by the calibre of placements we make and
              the enduring partnerships we cultivate.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              id voluptatem ipsa ipsam tempora ab doloribus, deleniti asperiores
              voluptatibus dolorem quia qui voluptas, exercitationem excepturi
              aliquid ex iure fugit hic?
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default AccordionDemo;
