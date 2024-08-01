import React from "react";
import { findCoordinateInPolygon } from "../../common/util";
import { HighLightImgProps, QuestionProps } from "../../common/types";

function Question(props: QuestionProps) {

    const [selectedImageList, setSelectedImageList] = React.useState<HighLightImgProps[]>([]);
    const imageRef = React.useRef<HTMLImageElement>(null);
    const [showHighLight, setShowHighLight] = React.useState(true);

    const onClickImage = React.useCallback((event: any) => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            // Calculate the percentage position relative to the image dimensions
            const xPercent = (mouseX / rect.width) * 100;
            const yPercent = (mouseY / rect.height) * 100;

            const currentSelectedPart = props.highLightImgs.find(item => {
                return findCoordinateInPolygon({ x: xPercent, y: yPercent }, item.coordinates);
            });

            if (currentSelectedPart) {
                const existingItem = selectedImageList.find(existingImage => existingImage.activeImgPath === currentSelectedPart.activeImgPath);
                if (currentSelectedPart.activeAll && !existingItem) {
                    setShowHighLight(false);
                    setSelectedImageList(props.highLightImgs);
                } else if (currentSelectedPart.activeAll && existingItem) {
                    setShowHighLight(true);
                    setSelectedImageList([]);
                }
                else {
                    setShowHighLight(true);
                    if (existingItem) {
                        setSelectedImageList(selectedImageList.filter(item => item.activeImgPath !== existingItem.activeImgPath && (!item.activeAll || existingItem.activeAll)));
                    } else {
                        setSelectedImageList([...selectedImageList, currentSelectedPart]);
                    }
                }

            }
        }

    }, [props.highLightImgs, selectedImageList]);

    const selecImgs = React.useMemo(() => {
        return selectedImageList.map((item, index) => {
            return <React.Fragment key={index}>
                <img
                    key={index + '_highlight'}
                    src={item.hightlightImgPath}
                    alt={item.hightlightImgPath}
                    className="absolute cursor-pointer"
                    onClick={onClickImage}
                /> {showHighLight && <img
                    key={index + '_active'}
                    src={item.activeImgPath}
                    alt={item.activeImgPath}
                    className="absolute cursor-pointer"
                    onClick={onClickImage}
                />}
            </React.Fragment>
        })
    }, [
        selectedImageList,
        onClickImage,
        showHighLight
    ])

    return (
        <div className="relative">
            {selecImgs}
            <img ref={imageRef} alt={props.baseImg} className="cursor-pointer" onClick={onClickImage} src={props.baseImg}></img>
        </div>

    );
}

export default Question;