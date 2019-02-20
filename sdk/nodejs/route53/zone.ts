// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages a Route53 Hosted Zone.
 * 
 * ## Example Usage
 * 
 * ### Public Zone
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const primary = new aws.route53.Zone("primary", {});
 * ```
 * 
 * ### Public Subdomain Zone
 * 
 * For use in subdomains, note that you need to create a
 * `aws_route53_record` of type `NS` as well as the subdomain
 * zone.
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const dev = new aws.route53.Zone("dev", {
 *     tags: {
 *         Environment: "dev",
 *     },
 * });
 * const main = new aws.route53.Zone("main", {});
 * const dev_ns = new aws.route53.Record("dev-ns", {
 *     records: [
 *         dev.nameServers.apply(nameServers => nameServers[0]),
 *         dev.nameServers.apply(nameServers => nameServers[1]),
 *         dev.nameServers.apply(nameServers => nameServers[2]),
 *         dev.nameServers.apply(nameServers => nameServers[3]),
 *     ],
 *     ttl: 30,
 *     type: "NS",
 *     zoneId: main.zoneId,
 * });
 * ```
 * 
 * ### Private Zone
 * 
 * > **NOTE:** Terraform provides both exclusive VPC associations defined in-line in this resource via `vpc` configuration blocks and a separate [Zone VPC Association](https://www.terraform.io/docs/providers/aws/r/route53_zone_association.html) resource. At this time, you cannot use in-line VPC associations in conjunction with any `aws_route53_zone_association` resources with the same zone ID otherwise it will cause a perpetual difference in plan output. You can optionally use the generic Terraform resource [lifecycle configuration block](https://www.terraform.io/docs/configuration/resources.html#lifecycle) with `ignore_changes` to manage additional associations via the `aws_route53_zone_association` resource.
 * 
 * > **NOTE:** Private zones require at least one VPC association at all times.
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const privateZone = new aws.route53.Zone("private", {
 *     vpcs: [{
 *         vpcId: aws_vpc_example.id,
 *     }],
 * });
 * ```
 */
export class Zone extends pulumi.CustomResource {
    /**
     * Get an existing Zone resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZoneState, opts?: pulumi.CustomResourceOptions): Zone {
        return new Zone(name, <any>state, { ...opts, id: id });
    }

    /**
     * A comment for the hosted zone. Defaults to 'Managed by Terraform'.
     */
    public readonly comment: pulumi.Output<string>;
    /**
     * The ID of the reusable delegation set whose NS records you want to assign to the hosted zone. Conflicts with `vpc` and `vpc_id` as delegation sets can only be used for public zones.
     */
    public readonly delegationSetId: pulumi.Output<string | undefined>;
    /**
     * Whether to destroy all records (possibly managed outside of Terraform) in the zone when destroying the zone.
     */
    public readonly forceDestroy: pulumi.Output<boolean | undefined>;
    /**
     * This is the name of the hosted zone.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * A list of name servers in associated (or default) delegation set.
     * Find more about delegation sets in [AWS docs](https://docs.aws.amazon.com/Route53/latest/APIReference/actions-on-reusable-delegation-sets.html).
     */
    public /*out*/ readonly nameServers: pulumi.Output<string[]>;
    /**
     * A mapping of tags to assign to the zone.
     */
    public readonly tags: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Configuration block(s) specifying VPC(s) to associate with a private hosted zone. Conflicts with `delegation_set_id`, `vpc_id`, and `vpc_region` in this resource and any [`aws_route53_zone_association` resource](https://www.terraform.io/docs/providers/aws/r/route53_zone_association.html) specifying the same zone ID. Detailed below.
     */
    public readonly vpcs: pulumi.Output<{ vpcId: string, vpcRegion: string }[]>;
    /**
     * ID of the VPC to associate.
     */
    public readonly vpcId: pulumi.Output<string>;
    /**
     * Region of the VPC to associate. Defaults to AWS provider region.
     */
    public readonly vpcRegion: pulumi.Output<string>;
    /**
     * The Hosted Zone ID. This can be referenced by zone records.
     */
    public /*out*/ readonly zoneId: pulumi.Output<string>;

    /**
     * Create a Zone resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ZoneArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ZoneArgs | ZoneState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ZoneState = argsOrState as ZoneState | undefined;
            inputs["comment"] = state ? state.comment : undefined;
            inputs["delegationSetId"] = state ? state.delegationSetId : undefined;
            inputs["forceDestroy"] = state ? state.forceDestroy : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["nameServers"] = state ? state.nameServers : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["vpcs"] = state ? state.vpcs : undefined;
            inputs["vpcId"] = state ? state.vpcId : undefined;
            inputs["vpcRegion"] = state ? state.vpcRegion : undefined;
            inputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as ZoneArgs | undefined;
            inputs["comment"] = (args ? args.comment : undefined) || "Managed by Pulumi";
            inputs["delegationSetId"] = args ? args.delegationSetId : undefined;
            inputs["forceDestroy"] = args ? args.forceDestroy : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["vpcs"] = args ? args.vpcs : undefined;
            inputs["vpcId"] = args ? args.vpcId : undefined;
            inputs["vpcRegion"] = args ? args.vpcRegion : undefined;
            inputs["nameServers"] = undefined /*out*/;
            inputs["zoneId"] = undefined /*out*/;
        }
        super("aws:route53/zone:Zone", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Zone resources.
 */
export interface ZoneState {
    /**
     * A comment for the hosted zone. Defaults to 'Managed by Terraform'.
     */
    readonly comment?: pulumi.Input<string>;
    /**
     * The ID of the reusable delegation set whose NS records you want to assign to the hosted zone. Conflicts with `vpc` and `vpc_id` as delegation sets can only be used for public zones.
     */
    readonly delegationSetId?: pulumi.Input<string>;
    /**
     * Whether to destroy all records (possibly managed outside of Terraform) in the zone when destroying the zone.
     */
    readonly forceDestroy?: pulumi.Input<boolean>;
    /**
     * This is the name of the hosted zone.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A list of name servers in associated (or default) delegation set.
     * Find more about delegation sets in [AWS docs](https://docs.aws.amazon.com/Route53/latest/APIReference/actions-on-reusable-delegation-sets.html).
     */
    readonly nameServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A mapping of tags to assign to the zone.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Configuration block(s) specifying VPC(s) to associate with a private hosted zone. Conflicts with `delegation_set_id`, `vpc_id`, and `vpc_region` in this resource and any [`aws_route53_zone_association` resource](https://www.terraform.io/docs/providers/aws/r/route53_zone_association.html) specifying the same zone ID. Detailed below.
     */
    readonly vpcs?: pulumi.Input<pulumi.Input<{ vpcId: pulumi.Input<string>, vpcRegion?: pulumi.Input<string> }>[]>;
    /**
     * ID of the VPC to associate.
     */
    readonly vpcId?: pulumi.Input<string>;
    /**
     * Region of the VPC to associate. Defaults to AWS provider region.
     */
    readonly vpcRegion?: pulumi.Input<string>;
    /**
     * The Hosted Zone ID. This can be referenced by zone records.
     */
    readonly zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Zone resource.
 */
export interface ZoneArgs {
    /**
     * A comment for the hosted zone. Defaults to 'Managed by Terraform'.
     */
    readonly comment?: pulumi.Input<string>;
    /**
     * The ID of the reusable delegation set whose NS records you want to assign to the hosted zone. Conflicts with `vpc` and `vpc_id` as delegation sets can only be used for public zones.
     */
    readonly delegationSetId?: pulumi.Input<string>;
    /**
     * Whether to destroy all records (possibly managed outside of Terraform) in the zone when destroying the zone.
     */
    readonly forceDestroy?: pulumi.Input<boolean>;
    /**
     * This is the name of the hosted zone.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the zone.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Configuration block(s) specifying VPC(s) to associate with a private hosted zone. Conflicts with `delegation_set_id`, `vpc_id`, and `vpc_region` in this resource and any [`aws_route53_zone_association` resource](https://www.terraform.io/docs/providers/aws/r/route53_zone_association.html) specifying the same zone ID. Detailed below.
     */
    readonly vpcs?: pulumi.Input<pulumi.Input<{ vpcId: pulumi.Input<string>, vpcRegion?: pulumi.Input<string> }>[]>;
    /**
     * ID of the VPC to associate.
     */
    readonly vpcId?: pulumi.Input<string>;
    /**
     * Region of the VPC to associate. Defaults to AWS provider region.
     */
    readonly vpcRegion?: pulumi.Input<string>;
}

/**
 * The live Zone resource.
 */
export interface ZoneResult {
    /**
     * A comment for the hosted zone. Defaults to 'Managed by Terraform'.
     */
    readonly comment: string;
    /**
     * The ID of the reusable delegation set whose NS records you want to assign to the hosted zone. Conflicts with `vpc` and `vpc_id` as delegation sets can only be used for public zones.
     */
    readonly delegationSetId?: string;
    /**
     * Whether to destroy all records (possibly managed outside of Terraform) in the zone when destroying the zone.
     */
    readonly forceDestroy?: boolean;
    /**
     * This is the name of the hosted zone.
     */
    readonly name: string;
    /**
     * A list of name servers in associated (or default) delegation set.
     * Find more about delegation sets in [AWS docs](https://docs.aws.amazon.com/Route53/latest/APIReference/actions-on-reusable-delegation-sets.html).
     */
    readonly nameServers: string[];
    /**
     * A mapping of tags to assign to the zone.
     */
    readonly tags?: {[key: string]: any};
    /**
     * Configuration block(s) specifying VPC(s) to associate with a private hosted zone. Conflicts with `delegation_set_id`, `vpc_id`, and `vpc_region` in this resource and any [`aws_route53_zone_association` resource](https://www.terraform.io/docs/providers/aws/r/route53_zone_association.html) specifying the same zone ID. Detailed below.
     */
    readonly vpcs: { vpcId: string, vpcRegion: string }[];
    /**
     * ID of the VPC to associate.
     */
    readonly vpcId: string;
    /**
     * Region of the VPC to associate. Defaults to AWS provider region.
     */
    readonly vpcRegion: string;
    /**
     * The Hosted Zone ID. This can be referenced by zone records.
     */
    readonly zoneId: string;
}
