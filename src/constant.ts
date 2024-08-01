import Abs from './assets/default-abs.png';
import LlqActive from './assets/llq-active.png';
import LlqHL from './assets/llq-highlight.png';
import EpigastriumActive from './assets/epigastrium-active.png';
import EpigastriumHL from './assets/epigastrium-highlight.png';
import LuqActive from './assets/luq-active.png';
import LuqHL from './assets/luq-highlight.png';
import RlqActive from './assets/rlq-active.png';
import RlqHL from './assets/rlq-highlight.png';
import RuqActive from './assets/ruq-active.png';
import RuqHL from './assets/ruq-highlight.png';
import SuprapublicActive from './assets/suprapubic-active.png';
import SuprapublicHL from './assets/suprapubic-highlight.png';
import UmbilicusActive from './assets/umbilicus-active.png';
import UmbilicusHL from './assets/umbilicus-highlight.png';
import allOverHightLight from './assets/all-over-highlight.png';
import Finger from './assets/default-finger.png';
import DipActive from './assets/dip-active.png';
import DipHL from './assets/dip-highlight.png';
import McpActive from './assets/mcp-active.png';
import McpHL from './assets/mcp-highlight.png';
import PipActive from './assets/pip-active.png';
import PipHL from './assets/pip-highlight.png';
import Others from './assets/others-highlight.png';
import { QuestionProps } from './common/types';

export const ABDOMINAL_IMG = "./assets/default-abs.png";
export const FINGER_IMG = "./assets/default-finger.png";

const ABDOMINAL_BASE_IMG = Abs;
const ABDOMINAL_HIGHLIGHT_IMGS = [
    { hightlightImgPath: allOverHightLight, coordinates: [{ x: 31, y: 91 }, { x: 34, y: 88 }, { x: 48, y: 87 }, { x: 60, y: 87 }, { x: 63, y: 96 }, { x: 46, y: 95 }, { x: 36, y: 95 }], activeImgPath: allOverHightLight, activeAll: true },
    { hightlightImgPath: LlqHL, coordinates: [{ x: 52, y: 58 }, { x: 55, y: 54 }, { x: 64, y: 54 }, { x: 62, y: 60 }, { x: 57, y: 65 }, { x: 55, y: 61 }], activeImgPath: LlqActive },
    { hightlightImgPath: EpigastriumHL, coordinates: [{ x: 41, y: 40 }, { x: 48, y: 34 }, { x: 54, y: 40 }, { x: 48, y: 47 }], activeImgPath: EpigastriumActive },
    { hightlightImgPath: LuqHL, coordinates: [{ x: 51, y: 48 }, { x: 57, y: 42 }, { x: 62, y: 44 }, { x: 64, y: 52 }, { x: 55, y: 52 }], activeImgPath: LuqActive },
    { hightlightImgPath: RlqHL, coordinates: [{ x: 32, y: 54 }, { x: 41, y: 54 }, { x: 44, y: 57 }, { x: 40, y: 64 }, { x: 32, y: 58 }], activeImgPath: RlqActive },
    { hightlightImgPath: RuqHL, coordinates: [{ x: 34, y: 44 }, { x: 39, y: 41 }, { x: 46, y: 47 }, { x: 41, y: 51 }, { x: 32, y: 51 }], activeImgPath: RuqActive },
    { hightlightImgPath: SuprapublicHL, coordinates: [{ x: 42, y: 66 }, { x: 44, y: 62 }, { x: 48, y: 58 }, { x: 52, y: 61 }, { x: 54, y: 64 }, { x: 55, y: 66 }, { x: 52, y: 67 }, { x: 49, y: 69 }, { x: 45, y: 67 }], activeImgPath: SuprapublicActive },
    { hightlightImgPath: UmbilicusHL, coordinates: [{ x: 44, y: 52 }, { x: 45, y: 50 }, { x: 48, y: 49 }, { x: 50, y: 50 }, { x: 52, y: 51 }, { x: 53, y: 54 }, { x: 51, y: 56 }, { x: 48, y: 56 }, { x: 46, y: 56 }, { x: 45, y: 55 }, { x: 44, y: 54 }], activeImgPath: UmbilicusActive }
];

const FINGER_BASE_IMG = Finger;
const FINGER_HIGHLIGHT_IMGS = [
    { hightlightImgPath: Others, coordinates: [{ x: 18, y: 91 }, { x: 80, y: 91 }, { x: 83, y: 94 }, { x: 80, y: 97 }, { x: 19, y: 98 }, { x: 15, y: 95 }], activeImgPath: Others, activeAll: true },
    { hightlightImgPath: DipHL, coordinates: [{ x: 21, y: 26 }, { x: 21, y: 25 }, { x: 33, y: 14 }, { x: 40, y: 10 }, { x: 47, y: 9 }, { x: 62, y: 11 }, { x: 63, y: 13 }, { x: 57, y: 15 }, { x: 46, y: 13 }, { x: 39, y: 16 }, { x: 33, y: 20 }, { x: 25, y: 27 }, { x: 22, y: 29 }], activeImgPath: DipActive, activeAll: false },
    { hightlightImgPath: PipHL, coordinates: [{ x: 30, y: 28 }, { x: 38, y: 23 }, { x: 48, y: 19 }, { x: 59, y: 19 }, { x: 65, y: 19 }, { x: 85, y: 40 }, { x: 85, y: 45 }, { x: 75, y: 46 }, { x: 68, y: 39 }, { x: 61, y: 31 }, { x: 35, y: 33 }, { x: 25, y: 38 }], activeImgPath: PipActive, activeAll: false },
    { hightlightImgPath: McpHL, coordinates: [{ x: 28, y: 33 }, { x: 23, y: 25 }, { x: 23, y: 25 }, { x: 23, y: 25 }, { x: 69, y: 27 }, { x: 69, y: 27 }, { x: 27, y: 43 }, { x: 32, y: 40 }, { x: 46, y: 34 }, { x: 63, y: 35 }, { x: 76, y: 55 }, { x: 73, y: 58 }, { x: 65, y: 56 }, { x: 60, y: 42 }, { x: 30, y: 47 }], activeImgPath: McpActive, activeAll: false }
]

export const QUESTIONS: QuestionProps[] = [
    {
        baseImg: ABDOMINAL_BASE_IMG,
        highLightImgs: ABDOMINAL_HIGHLIGHT_IMGS,
        questionLabel: "Question 1 (Please select your problem area)"
    },
    {
        baseImg: FINGER_BASE_IMG,
        highLightImgs: FINGER_HIGHLIGHT_IMGS,
        questionLabel: "Question 2 (Please select your problem area)"
    }
]