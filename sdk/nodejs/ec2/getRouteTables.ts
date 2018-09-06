// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * This resource can be useful for getting back a list of route table ids to be referenced elsewhere.
 */
export function getRouteTables(args?: GetRouteTablesArgs, opts?: pulumi.InvokeOptions): Promise<GetRouteTablesResult> {
    args = args || {};
    return pulumi.runtime.invoke("aws:ec2/getRouteTables:getRouteTables", {
        "filters": args.filters,
        "tags": args.tags,
        "vpcId": args.vpcId,
    }, opts);
}

/**
 * A collection of arguments for invoking getRouteTables.
 */
export interface GetRouteTablesArgs {
    /**
     * Custom filter block as described below.
     */
    readonly filters?: { name: string, values: string[] }[];
    /**
     * A mapping of tags, each pair of which must exactly match
     * a pair on the desired route tables.
     */
    readonly tags?: {[key: string]: any};
    /**
     * The VPC ID that you want to filter from.
     */
    readonly vpcId?: string;
}

/**
 * A collection of values returned by getRouteTables.
 */
export interface GetRouteTablesResult {
    /**
     * A list of all the route table ids found. This data source will fail if none are found.
     */
    readonly ids: string[];
    readonly tags: {[key: string]: any};
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
