export interface ModDependency {
    name: string;
    operation?: string;
    version?: string;
}

export interface Mod {
    name: string;
    title: string;
    version: string;
    author: string;
    description: string;
    dependencies: ModDependency[];
    factorio_version?: string;
    homepage?: string;
    path: string;
    enabled: boolean;
    thumbnail_path?: string;
}
