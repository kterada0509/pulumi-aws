// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to get the ARN of a KMS key alias.
 * By using this data source, you can reference key alias
 * without having to hard code the ARN as input.
 */
export function getAlias(args: GetAliasArgs, opts?: pulumi.InvokeOptions): Promise<GetAliasResult> {
    return pulumi.runtime.invoke("aws:kms/getAlias:getAlias", {
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getAlias.
 */
export interface GetAliasArgs {
    /**
     * The display name of the alias. The name must start with the word "alias" followed by a forward slash (alias/)
     */
    readonly name: string;
}

/**
 * A collection of values returned by getAlias.
 */
export interface GetAliasResult {
    /**
     * The Amazon Resource Name(ARN) of the key alias.
     */
    readonly arn: string;
    /**
     * ARN pointed to by the alias.
     */
    readonly targetKeyArn: string;
    /**
     * Key identifier pointed to by the alias.
     */
    readonly targetKeyId: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
