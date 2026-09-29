
    export type RemoteKeys = 'remote2/app';
    type PackageType<T> = T extends 'remote2/app' ? typeof import('remote2/app') :any;