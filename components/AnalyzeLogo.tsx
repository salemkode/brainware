"use client"

import { useMemo, useState } from "react";
import { ColoredIcon } from "./ColoredIcon";
import { Badge, Text } from "./retroui";

export const AnalyzeLogo = () => {
    "use client"
    const [brainHovered, setBrainHovered] = useState(false);
    const [programHovered, setProgramHovered] = useState(false);

    const isHovered = useMemo(() => {
        if (programHovered || brainHovered) return true;

        return false
    }, [programHovered, brainHovered])
    return <div className="flex flex-col md:flex-row items-center gap-8 border border-muted-foreground p-4">
        <div className="w-full md:w-1/2 flex justify-center">
            <ColoredIcon
                leftBrain={isHovered ? brainHovered ? "#002650" : "#5a5a5a" : "#002650"}
                rightBrain={isHovered ? programHovered ? "#002650" : "#5a5a5a" : "#002650"}
                rightContents={isHovered ? programHovered ? "#002650" : "#5a5a5a" : "#00B3EB"}
                spacingColor={isHovered ? "white " : "#FFAA1C"}
                headOfLogo={isHovered ? "#5a5a5a" : "#002650"}
                yellowColored={isHovered ? "#5a5a5a" : "#FFAA1C"}
            />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
            <Text className="text-lg text-muted-foreground">
                يرمز الشعار إلى الذكاء، الابتكار والتعليم التقني من خلال الدمج بين:
            </Text>
            <div className="space-y-2">
                <div className="flex items-center gap-2" onMouseOver={() => setBrainHovered(true)} onMouseOut={() => setBrainHovered(false)}>
                    <Badge className="bg-violet-600 text-white">العقل</Badge>
                    <Text>التفكير، الإبداع، التحليل</Text>
                </div>
                <div className="flex items-center gap-2">
                    <Badge className="bg-blue-600 text-white" onMouseOver={() => setProgramHovered(true)} onMouseOut={() => setProgramHovered(false)}>البرمجة</Badge>
                    <Text>التكنولوجيا، الأنظمة، والإنجاز التقني</Text>
                </div>
            </div>
            <Text className="text-lg text-muted-foreground mt-4">
                ويمثل الشعار دفعة طلابية تبرمج مستقبلها بعقولها، حيث يعبر بوضوح عن العقل كأداة ذكية تصنع التكنولوجيا، لا العكس.
            </Text>
        </div>
    </div>
}