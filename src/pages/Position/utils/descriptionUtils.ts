class DescriptionConstants {
    static END_OF_PARAGRAPH = 'END_OF_PARAGRAPH';
    static END_OF_SUBTITLE = 'END_OF_SUBTITLE';
    static END_OF_LIST_ITEM = 'END_OF_LIST_ITEM';
}

export interface BaseParagraph {
    items: string[]
}

export interface ParagraphWithList {
    subtitle: string;
    listItems: string[];
}

export type Paragraph = BaseParagraph | ParagraphWithList;

export const parseDescription = (description: string): Paragraph [] => {
    const paragraphs = description.split(DescriptionConstants.END_OF_PARAGRAPH);
    return paragraphs.map(part => {
        if (part.includes(DescriptionConstants.END_OF_SUBTITLE)) {
            const subtitleAndListItems = part.split(DescriptionConstants.END_OF_SUBTITLE);
            const subtitle = subtitleAndListItems[0];
            const listItems = subtitleAndListItems[1].split(DescriptionConstants.END_OF_LIST_ITEM).filter(x => x.trim() !== '');
            return {
                subtitle,
                listItems
            } as ParagraphWithList
        }
        return {
            items: part.split('\n')
        } as BaseParagraph
    });
}