import {FC} from "react";
import {BaseParagraph, ParagraphWithList, parseDescription} from "../../../pages/Position/utils/descriptionUtils";
import PositionDescriptionItem from "../PositionDescriptionItem/PositionDescriptionItem";
import {Position} from "../../../models/Position";

export interface IPositionDescriptionProps {
    position: Position;
}

const PositionDescription:FC<IPositionDescriptionProps> = ({
    position
                                                           }) => {
    const descriptionParts = parseDescription(position.description);

    const content = descriptionParts.map((item, partIndex) => {
        if (item.hasOwnProperty('subtitle')) {
            const paragraphWithList = item as ParagraphWithList;
            return (
                <PositionDescriptionItem key={partIndex}>
                    <h3>{paragraphWithList.subtitle}</h3>
                    <ul>
                        {
                            paragraphWithList.listItems.map((listItem, index) => <li key={index}>{listItem}</li>)
                        }
                    </ul>
                </PositionDescriptionItem>
            );
        }
        const baseParagraph = item as BaseParagraph;
        return (
            <PositionDescriptionItem key={partIndex}>
                {
                    baseParagraph.items.map((paragraphItem, index) => <p key={index}>{paragraphItem}</p>)
                }
            </PositionDescriptionItem>
        );
    });

    return (
        <>
            {content}
        </>
    );
}

export default PositionDescription;