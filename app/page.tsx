'use client';

import { AnalyzeLogo } from "@/components/AnalyzeLogo";
import { InputName } from "@/components/InputName";
import {
  Button,
  Text,
  Card,
} from "@/components/retroui";
import Image from "next/image";

export default function Home() {
  const memories = [
    "/images/memory1.webp",
    "/images/memory2.webp",
    "/images/memory3.webp",
  ];

  const facultyMessages = [
    {
      name: "د. سعيد بامطرف",
      message: `دفعة BrainWare اثبتت ان علوم الحاسوب ليست علماً فقط، بل فكراً وابداعاً ينبض بالحياة.`
    },
    {
      name: "عبدالقادر باسلامة",
      message: `دفعة BrainWare كانت أكثر من مجرد مجموعة طلاب…
كانت الشرارة التي جعلتني أدرك أن نقل المعرفة يمكن أن يكون متعة حقيقية، لا مجرد مهمة.
تجربة غنية بالتفاعل والإبداع، تركت في نفسي أثرًا عميقًا.`
    }
  ];

  const scroll = () => {
    try {
      document.querySelector("#about")?.scrollIntoView({
        behavior: "smooth"
      })
    } catch {

    }
  }

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
              <Button variant="default" className="w-full sm:w-auto" onClick={scroll}>تعرف علينا</Button>
            </div>
          </div>
        </section>

        {/* من نحن */}
        <section id="about" className="container max-w-5xl mx-auto px-4 py-24">
          <Text as="h2" className="text-3xl font-bold text-center text-gray-900 relative mb-8">
            من نحن؟
          </Text>
          <Text className="text-lg text-center max-w-2xl mx-auto">
            🎓 دفعة BrainWare – الدفعة الثامنة، كلية الحاسبات، جامعة سيئون
            نحن طلاب علوم الحاسوب، نحمل شغفًا لا ينطفئ بالتقنية، ونؤمن بأن الإبداع هو لغة المستقبل.
            في دفعة BrainWare جمعنا بين الفكر، والابتكار، والعمل الجماعي، لنكون جيلًا يسهم في بناء مستقبل رقمي أكثر ذكاءً وإنسانية.
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

      {/* قسم الشعار */}
      <Text as="h2" className="text-3xl font-bold text-center text-gray-900 relative my-8">
        تحليل الشعار
      </Text>
      <section className="container max-w-6xl mx-auto p-4 my-24 rounded-2xl px-4">
        <AnalyzeLogo />
      </section>

      {/* رسائل الأساتذة */}
      <section id="faculty" className="container max-w-6xl mx-auto px-4 py-24">
        <Text as="h2" className="text-3xl font-bold mb-12 text-center">
          رسائل من الأساتذة
        </Text>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {facultyMessages.map((msg) => (
            <Card key={msg.name} className="bg-background shadow-none border border-muted-foreground p-6">
              <Text as="h3" className="font-semibold mb-2">{msg.name}</Text>
              <Text>{msg.message}</Text>
            </Card>
          ))}
        </div>
      </section>

      <InputName />
    </main>
  );
}
