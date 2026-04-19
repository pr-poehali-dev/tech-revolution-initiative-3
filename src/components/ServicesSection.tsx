import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookImage, Printer, Palette, FileImage, ImagePlus, Layers } from "lucide-react"

const services = [
  {
    icon: BookImage,
    title: "Фотокниги",
    description:
      "Превращаем ваши фотографии в красивые фотокниги с профессиональной полиграфией. Идеально для семейных альбомов, свадеб, путешествий и корпоративных изданий.",
  },
  {
    icon: Printer,
    title: "Широкоформатная печать",
    description:
      "Баннеры, постеры, плакаты и фотопанно любого размера. Высокое разрешение, яркие краски и материалы для использования как в помещении, так и на улице.",
  },
  {
    icon: Palette,
    title: "Графический дизайн",
    description:
      "Создаём фирменный стиль, логотипы, визитки, флаеры и любые рекламные материалы. Оригинальные дизайн-решения, которые выделяют ваш бренд среди конкурентов.",
  },
  {
    icon: FileImage,
    title: "Полиграфия",
    description:
      "Визитки, буклеты, каталоги, открытки и листовки. Собственное производство позволяет нам гарантировать отличное качество и короткие сроки изготовления.",
  },
  {
    icon: ImagePlus,
    title: "Обработка фото",
    description:
      "Профессиональная ретушь, цветокоррекция и обработка фотографий перед печатью. Ваши снимки будут выглядеть безупречно в любом формате.",
  },
  {
    icon: Layers,
    title: "Сувенирная продукция",
    description:
      "Кружки, футболки, подушки, магниты и другая сувенирная продукция с вашим фото или дизайном. Отличное решение для подарков и корпоративного мерча.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наши услуги
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что мы <span className="text-primary">предлагаем</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Полный спектр услуг фото-печати и графического дизайна — от идеи до готового изделия в ваших руках.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
