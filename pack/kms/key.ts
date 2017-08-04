// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class Key extends lumi.NamedResource implements KeyArgs {
    public /*out*/ readonly arn: string;
    public readonly deletionWindowInDays?: number;
    public readonly description: string;
    public readonly enableKeyRotation?: boolean;
    public readonly isEnabled?: boolean;
    public /*out*/ readonly keyId: string;
    public readonly keyUsage: string;
    public readonly policy: string;
    public readonly tags?: {[key: string]: any};

    public static get(id: lumi.ID): Key {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): Key[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(name: string, args: KeyArgs) {
        super(name);
        this.deletionWindowInDays = <any>args.deletionWindowInDays;
        this.description = <any>args.description;
        this.enableKeyRotation = <any>args.enableKeyRotation;
        this.isEnabled = <any>args.isEnabled;
        this.keyUsage = <any>args.keyUsage;
        this.policy = <any>args.policy;
        this.tags = <any>args.tags;
    }
}

export interface KeyArgs {
    readonly deletionWindowInDays?: number;
    readonly description?: string;
    readonly enableKeyRotation?: boolean;
    readonly isEnabled?: boolean;
    readonly keyUsage?: string;
    readonly policy?: string;
    readonly tags?: {[key: string]: any};
}
