// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to get the ID of an [elastic beanstalk hosted zone](http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticbeanstalk_region).
 */
export function getHostedZone(args?: GetHostedZoneArgs, opts?: pulumi.InvokeOptions): Promise<GetHostedZoneResult> {
    args = args || {};
    return pulumi.runtime.invoke("aws:elasticbeanstalk/getHostedZone:getHostedZone", {
        "region": args.region,
    }, opts);
}

/**
 * A collection of arguments for invoking getHostedZone.
 */
export interface GetHostedZoneArgs {
    /**
     * The region you'd like the zone for. By default, fetches the current region.
     */
    readonly region?: string;
}

/**
 * A collection of values returned by getHostedZone.
 */
export interface GetHostedZoneResult {
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
