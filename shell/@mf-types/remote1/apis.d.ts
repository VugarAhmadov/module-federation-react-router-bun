
    export type RemoteKeys = 'remote1/app';
    type PackageType<T> = T extends 'remote1/app' ? typeof import('remote1/app') :any;