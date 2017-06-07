import { GameEngineOrTool } from './game-engine.model';
import { Type } from './type.model';

const UNKOWN = "?";
const OS_WINDOWS = "Windows";
const OS_LINUX = "Linux";
const OS_MAC = "Mac";

const DIST_MOBILE = "Mobile";
const DIST_WEB = "Web";

const PL_CPP = "C++";
const PL_JS = "JavaScript";
const PL_LUA = "Lua";

export const GAME_ENGINES : GameEngineOrTool [] = [
    {
        name: "Cocos2d-x",
        types: [Type.ENGINE_WITH_SCENE_GRAPH],
        support2d: true,
        support3d: false,
        programmingLanguages: [PL_CPP, PL_JS, PL_LUA],
        devPlatform: [OS_WINDOWS, OS_LINUX, OS_MAC],
        distPlatform: [OS_WINDOWS, OS_LINUX, OS_MAC, DIST_MOBILE, DIST_WEB],
        documentation: "",
        additionalRequirements: "",
        accountRequired: false,
        license: "MIT, OpenSource",
        commentPro: "Chipmunk2D physics, particle, tiled support",
        commentContra: ""
    },
    {
        name: "Cocos Creator",
        types: [Type.SCENE_EDITOR, Type.TOOL],
        support2d: true,
        support3d: false,
        programmingLanguages: [PL_JS],
        devPlatform: [OS_WINDOWS, OS_MAC],
        distPlatform: [UNKOWN],
        documentation: UNKOWN,
        additionalRequirements: "Debugging requires VS",
        accountRequired: true,
        license: "",
        commentPro: "",
        commentContra: ""
    },
    {
        name: "Cocos Studio (EOL)",
        types: [Type.SCENE_EDITOR, Type.TOOL],
        support2d: true,
        support3d: false,
        programmingLanguages: [PL_CPP, PL_JS, PL_LUA],
        devPlatform: [OS_WINDOWS, OS_LINUX, OS_MAC],
        distPlatform: [UNKOWN],
        documentation: UNKOWN,
        additionalRequirements: "",
        accountRequired: false,
        license: "",
        commentPro: "",
        commentContra: ""
    },
    {
        name: "Godot Engine",
        types: [Type.ENGINE_WITH_SCENE_GRAPH, Type.SCENE_EDITOR, Type.TOOL],
        support2d: true,
        support3d: true,
        programmingLanguages: ["Python-like scripting language", "(c++)"],
        devPlatform: [OS_WINDOWS, OS_LINUX, OS_MAC],
        distPlatform: [UNKOWN],
        documentation: UNKOWN,
        additionalRequirements: "",
        accountRequired: false,
        license: "MIT",
        commentPro: "small editor(30MB), physics",
        commentContra: "writing game logic in c++ is possible but laborious and you have to call your c++ logic from your python-like scripting language in any case"
    },
    {
        name: "Tile Map Editor",
        types: [Type.SCENE_EDITOR],
        support2d: true,
        support3d: false,
        programmingLanguages: [],
        devPlatform: [OS_WINDOWS, OS_LINUX, OS_MAC],
        distPlatform: [],
        documentation: "",
        additionalRequirements: "",
        accountRequired: false,
        license: "",
        commentPro: "create tilemaps for your games",
        commentContra: ""
    }
];