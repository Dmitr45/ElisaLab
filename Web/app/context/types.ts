
export type NameObjType = { // Тип для названия приложения
    name: string,
    span: string,
    slogan: string 
};


export type    pagesType = (()=>JSX.Element)[];
export type    darkThemeContextType = boolean;
export type    toggleDarkThemeContextType = {(bool: boolean): string};
export type    themeActiveType = {readonly [key: string]: string};
export type    togglePageActiveType = {(page: number):string};
export type    NameAppType =  NameObjType;
export type    pageActiveType = number;
