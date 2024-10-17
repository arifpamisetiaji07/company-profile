import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeAboutUsContentFields {
    title?: EntryFieldTypes.Symbol;
    slug?: EntryFieldTypes.Symbol;
    body?: EntryFieldTypes.RichText;
    image?: EntryFieldTypes.AssetLink;
}

export interface IAsset {
    sys: {id: string};
    fields: {
        file: {
            url: string;
            details?: any;
            fileName?: string;
            contentType?: string;
        }
    }
}

export type TypeAboutUsContentSkeleton = EntrySkeletonType<TypeAboutUsContentFields, "aboutUsContent">;
export type TypeAboutUsContent<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeAboutUsContentSkeleton, Modifiers, Locales>;

export interface TypeSandwicooFields {
    slug?: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    body: EntryFieldTypes.RichText;
    image: EntryFieldTypes.RichText;
}

export type TypeSandwicooSkeleton = EntrySkeletonType<TypeSandwicooFields, "sandwicoo">;
export type TypeSandwicoo<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSandwicooSkeleton, Modifiers, Locales>;
