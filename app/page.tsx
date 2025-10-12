import {
  Button,
  Text,
  Card,
  Avatar,
  Badge,
} from "@/components/retroui";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const members = [
    { name: "Ahmed Ali", field: "AI & Data Science", avatar: "/images/avatar1.png" },
    { name: "Sara Mohammed", field: "Cybersecurity", avatar: "/images/avatar2.png" },
    { name: "Yousef Saleh", field: "Web Development", avatar: "/images/avatar3.png" },
    { name: "Amani Khaled", field: "Mobile Apps", avatar: "/images/avatar4.png" },
  ];

  const memories = [
    "/images/memory1.jpg",
    "/images/memory2.jpg",
    "/images/memory3.jpg",
  ];

  const facultyMessages = [
    {
      name: "د. سعيد بامطرف",
      message:
        "“دفعة Digital Brains أثبتت أن علوم الحاسوب ليست مجرد تخصص، بل أسلوب تفكير يربط بين المنطق والإبداع. أنتم العقول التي ترى النظام وسط الفوضى، وتحول الخوارزميات إلى حلول، والمعرفة إلى وعي رقمي متجدد. استمروا في البحث، فالعقول التي تُفكّر بالحاسوب، تُبدع للإنسان.”",
    }
  ];

  const coreValues = [
    { title: "الإبداع", color: "bg-violet-600" },
    { title: "التعاون", color: "bg-blue-600" },
    { title: "الفضول", color: "bg-green-600" },
    { title: "الاحترافية", color: "bg-orange-600" },
  ];

  return (
    <main dir="rtl">
      {/* الصفحة الرئيسية */}
      <div className=" bg-image bg-cover bg-no-repeat bg-bottom  ">
        <section className="container max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between py-28">
          <div className="w-full text-center space-y-6 pt-20">
            <Text as="h1" className="text-5xl text-black font-bold">
              BrainWare
            </Text>
            <Text className="text-lg text-black">
              دفعة علوم الحاسوب التي تجمع بين الإبداع، التقنية، والذكاء الاصطناعي.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
              <Link href="#about">
                <Button variant="default" className="w-full sm:w-auto">تعرف علينا</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* من نحن */}
        <section id="about" className="container max-w-5xl mx-auto px-4 py-24">
          <Text as="h2" className="text-3xl font-bold text-center text-gray-900 relative mb-8">
            من نحن؟
          </Text>
          <Text className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            نحن دفعة Digital Brains، طلاب علوم الحاسوب في جامعة سيئون،
            نجمع بين الشغف بالتقنية، التفكير الإبداعي، والعمل الجماعي لبناء مستقبل رقمي.
          </Text>
        </section>


        {/* ذكريات الدفعة */}
        <section id="memories" className="container max-w-6xl mx-auto px-4 py-24">
          <Text as="h2" className="text-3xl font-bold mb-12 text-center">
            ذكرياتنا
          </Text>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {memories.map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg border border-muted-foreground">
                <Image
                  src={src}
                  alt={`Memory ${idx + 1}`}
                  width={400}
                  height={300}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* أعضاء الدفعة */}
      <section id="members" className="container max-w-6xl mx-auto px-4 py-24">
        <Text as="h2" className="text-3xl font-bold mb-12 text-center text-black">
          أعضاء الدفعة
        </Text>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <Card
              key={member.name}
              className="bg-background shadow-none border border-muted-foreground p-4 flex flex-col items-center"
            >
              <Avatar className="h-16 w-16 mb-2">
                <Avatar.Image src={member.avatar} alt={member.name} />
              </Avatar>
              <Text className="font-semibold">{member.name}</Text>
              <Badge className="mt-2">{member.field}</Badge>
            </Card>
          ))}
        </div>
      </section>

      {/* رسائل الأساتذة */}
      <section id="faculty" className="container max-w-6xl mx-auto px-4 py-24">
        <Text as="h2" className="text-3xl font-bold mb-12 text-center">
          رسائل من الأساتذة
        </Text>
        <div className="grid grid-cols-1 gap-8">
          {facultyMessages.map((msg) => (
            <Card key={msg.name} className="bg-background shadow-none border border-muted-foreground p-6">
              <Text as="h3" className="font-semibold mb-2">{msg.name}</Text>
              <Text>{msg.message}</Text>
            </Card>
          ))}
        </div>
      </section>

      {/* قيم الدفعة */}
      <section id="values" className="container max-w-5xl mx-auto px-4 py-24">
        <Text as="h2" className="text-3xl font-bold mb-12 text-center">
          قيمنا
        </Text>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {coreValues.map((val) => (
            <Card key={val.title} className={`bg-background shadow-none border border-muted-foreground p-6`}>
              <Text className={`font-semibold ${val.color}`}>{val.title}</Text>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
