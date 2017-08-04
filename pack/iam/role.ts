// *** WARNING: this file was generated by the Lumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as lumi from "@lumi/lumi";
import * as lumirt from "@lumi/lumirt";

export class Role extends lumi.NamedResource implements RoleArgs {
    public /*out*/ readonly arn: string;
    public readonly assumeRolePolicy: string;
    public /*out*/ readonly createDate: string;
    public readonly description?: string;
    public readonly forceDetachPolicies?: boolean;
    public readonly roleName: string;
    public readonly namePrefix?: string;
    public readonly path?: string;
    public /*out*/ readonly uniqueId: string;

    public static get(id: lumi.ID): Role {
        return <any>undefined; // functionality provided by the runtime
    }

    public static query(q: any): Role[] {
        return <any>undefined; // functionality provided by the runtime
    }

    constructor(name: string, args: RoleArgs) {
        super(name);
        if (lumirt.defaultIfComputed(args.assumeRolePolicy, "") === undefined) {
            throw new Error("Property argument 'assumeRolePolicy' is required, but was missing");
        }
        this.assumeRolePolicy = <any>args.assumeRolePolicy;
        this.description = <any>args.description;
        this.forceDetachPolicies = <any>args.forceDetachPolicies;
        this.roleName = <any>args.roleName;
        this.namePrefix = <any>args.namePrefix;
        this.path = <any>args.path;
    }
}

export interface RoleArgs {
    readonly assumeRolePolicy: string;
    readonly description?: string;
    readonly forceDetachPolicies?: boolean;
    readonly roleName?: string;
    readonly namePrefix?: string;
    readonly path?: string;
}
