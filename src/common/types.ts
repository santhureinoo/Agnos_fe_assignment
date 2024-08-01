export interface CoordinateProps { x: number, y: number }

export interface HighLightImgProps {
    hightlightImgPath: string;
    coordinates: CoordinateProps[];
    activeImgPath: string;
    activeAll?: boolean;
}

export interface QuestionProps {
    baseImg: string;
    highLightImgs: HighLightImgProps[];
    questionLabel?: string;
}