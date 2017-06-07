import { Type } from './type.model';

export class GameEngineOrTool {
    name: String;
    types: Type[];
    support2d: boolean;
    support3d: boolean;
    programmingLanguages: String[];
    devPlatform: String[];
    distPlatform: String[];
    documentation: String;
    additionalRequirements: String;
    accountRequired: boolean
    license: String;
    commentPro: String;
    commentContra: String;

    constructor(
        name: String,
        types: Type[],
        support2d: boolean,
        support3d: boolean,
        programmingLanguages: String,
        devPlatform: String,
        distPlatform: String,
        documentation: String,
        additionalRequirements: String,
        accountRequired: boolean,
        license: String,
        commentPro: String,
        commentContra: String
    ) {
        this.name = name;
        this.types = types;
        this.support2d = support2d;
        this.support3d = support3d;
        this.programmingLanguages = programmingLanguages.split(",");
        this.devPlatform = devPlatform.split(",");
        this.distPlatform = distPlatform.split(",");
        this.documentation = documentation;
        this.additionalRequirements = additionalRequirements;
        this.accountRequired = accountRequired
        this.license = license;
        this.commentPro = commentPro;
        this.commentContra = commentContra;
    }
}

export class SearchFilter {
    propertyType: SearchFilterTypeOption;
    propertyValue: any;
}

export class SearchFilterTypeOption {
    name: String;
    filter: (gameEngine: GameEngineOrTool, searchFilter: SearchFilter) => boolean;

    constructor(name: String, filter: (gameEngine: GameEngineOrTool, searchFilter: SearchFilter) => boolean) {
        this.name = name;
        this.filter = filter;
    }
    
}

export class SearchSortOrder {
    propertyName: String;
    ascending: boolean;
}