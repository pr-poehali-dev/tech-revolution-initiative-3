import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Свадебная фотокнига",
    category: "Фотокниги",
    image: "https://cdn.poehali.dev/projects/90066bcf-75ac-40b9-9e90-c7a65977cad6/files/a2c89536-9b5c-48e5-9f2a-1dee55752b7e.jpg",
    description:
      "Роскошная фотокнига формата А4 на 60 разворотов с матовой ламинацией. Нежный дизайн, тонкая обработка каждого снимка — вечный подарок молодой паре.",
    tags: ["Фотокнига", "Свадьба", "А4", "Матовая ламинация"],
  },
  {
    title: "Рекламный баннер для кафе",
    category: "Широкоформатная печать",
    image: "https://cdn.poehali.dev/projects/90066bcf-75ac-40b9-9e90-c7a65977cad6/files/c603fa33-3eb1-4a5c-bc91-c999c76fda7c.jpg",
    description:
      "Яркий уличный баннер 3×1.5 м для летней веранды кафе. Разработали дизайн с нуля, подобрали влагостойкий материал для уличного размещения.",
    tags: ["Баннер", "Уличная печать", "Дизайн", "3×1.5 м"],
  },
  {
    title: "Фирменный стиль пекарни",
    category: "Графический дизайн",
    image: "https://cdn.poehali.dev/projects/90066bcf-75ac-40b9-9e90-c7a65977cad6/files/4ab63e06-1715-4595-8b4c-f6d1933c06cd.jpg",
    description:
      "Полный фирменный стиль: логотип, визитки, упаковка, меню и вывеска. Тёплая, уютная стилистика, которая сразу создаёт нужное настроение у посетителей.",
    tags: ["Логотип", "Фирстиль", "Визитки", "Упаковка"],
  },
  {
    title: "Корпоративные подарочные наборы",
    category: "Сувенирная продукция",
    image: "https://cdn.poehali.dev/projects/90066bcf-75ac-40b9-9e90-c7a65977cad6/files/6731d0c6-f3eb-4b6e-abe6-355e22ba5a43.jpg",
    description:
      "Серия корпоративных подарков к Новому году: кружки, ежедневники и магниты с брендингом компании. Тираж 200 штук, всё готово за 5 дней.",
    tags: ["Сувениры", "Корпоратив", "Кружки", "Брендинг"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши работы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Посмотрите примеры наших проектов — фотокниги, баннеры, дизайн и сувениры для клиентов из разных сфер.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
