// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

import {Tags} from "../index";

/**
 * Provides a resource to manage the [default AWS VPC](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/default-vpc.html)
 * in the current region.
 * 
 * For AWS accounts created after 2013-12-04, each region comes with a Default VPC.
 * **This is an advanced resource**, and has special caveats to be aware of when
 * using it. Please read this document in its entirety before using this resource.
 * 
 * The `aws_default_vpc` behaves differently from normal resources, in that
 * Terraform does not _create_ this resource, but instead "adopts" it
 * into management. 
 */
export class DefaultVpc extends pulumi.CustomResource {
    /**
     * Get an existing DefaultVpc resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DefaultVpcState): DefaultVpc {
        return new DefaultVpc(name, <any>state, { id });
    }

    /**
     * Amazon Resource Name (ARN) of VPC
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * Whether or not an Amazon-provided IPv6 CIDR 
     * block with a /56 prefix length for the VPC was assigned
     */
    public /*out*/ readonly assignGeneratedIpv6CidrBlock: pulumi.Output<boolean>;
    /**
     * The CIDR block of the VPC
     */
    public /*out*/ readonly cidrBlock: pulumi.Output<string>;
    /**
     * The ID of the network ACL created by default on VPC creation
     */
    public /*out*/ readonly defaultNetworkAclId: pulumi.Output<string>;
    /**
     * The ID of the route table created by default on VPC creation
     */
    public /*out*/ readonly defaultRouteTableId: pulumi.Output<string>;
    /**
     * The ID of the security group created by default on VPC creation
     */
    public /*out*/ readonly defaultSecurityGroupId: pulumi.Output<string>;
    public /*out*/ readonly dhcpOptionsId: pulumi.Output<string>;
    /**
     * A boolean flag to enable/disable ClassicLink 
     * for the VPC. Only valid in regions and accounts that support EC2 Classic.
     * See the [ClassicLink documentation][1] for more information. Defaults false.
     */
    public readonly enableClassiclink: pulumi.Output<boolean>;
    public readonly enableClassiclinkDnsSupport: pulumi.Output<boolean>;
    /**
     * A boolean flag to enable/disable DNS hostnames in the VPC. Defaults false.
     */
    public readonly enableDnsHostnames: pulumi.Output<boolean>;
    /**
     * A boolean flag to enable/disable DNS support in the VPC. Defaults true.
     */
    public readonly enableDnsSupport: pulumi.Output<boolean | undefined>;
    /**
     * Tenancy of instances spin up within VPC.
     */
    public /*out*/ readonly instanceTenancy: pulumi.Output<string>;
    /**
     * The association ID for the IPv6 CIDR block of the VPC
     */
    public /*out*/ readonly ipv6AssociationId: pulumi.Output<string>;
    /**
     * The IPv6 CIDR block of the VPC
     */
    public /*out*/ readonly ipv6CidrBlock: pulumi.Output<string>;
    /**
     * The ID of the main route table associated with
     * this VPC. Note that you can change a VPC's main route table by using an
     * [`aws_main_route_table_association`](https://www.terraform.io/docs/providers/aws/r/main_route_table_assoc.html)
     */
    public /*out*/ readonly mainRouteTableId: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<Tags | undefined>;

    /**
     * Create a DefaultVpc resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DefaultVpcArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DefaultVpcArgs | DefaultVpcState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: DefaultVpcState = argsOrState as DefaultVpcState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["assignGeneratedIpv6CidrBlock"] = state ? state.assignGeneratedIpv6CidrBlock : undefined;
            inputs["cidrBlock"] = state ? state.cidrBlock : undefined;
            inputs["defaultNetworkAclId"] = state ? state.defaultNetworkAclId : undefined;
            inputs["defaultRouteTableId"] = state ? state.defaultRouteTableId : undefined;
            inputs["defaultSecurityGroupId"] = state ? state.defaultSecurityGroupId : undefined;
            inputs["dhcpOptionsId"] = state ? state.dhcpOptionsId : undefined;
            inputs["enableClassiclink"] = state ? state.enableClassiclink : undefined;
            inputs["enableClassiclinkDnsSupport"] = state ? state.enableClassiclinkDnsSupport : undefined;
            inputs["enableDnsHostnames"] = state ? state.enableDnsHostnames : undefined;
            inputs["enableDnsSupport"] = state ? state.enableDnsSupport : undefined;
            inputs["instanceTenancy"] = state ? state.instanceTenancy : undefined;
            inputs["ipv6AssociationId"] = state ? state.ipv6AssociationId : undefined;
            inputs["ipv6CidrBlock"] = state ? state.ipv6CidrBlock : undefined;
            inputs["mainRouteTableId"] = state ? state.mainRouteTableId : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as DefaultVpcArgs | undefined;
            inputs["enableClassiclink"] = args ? args.enableClassiclink : undefined;
            inputs["enableClassiclinkDnsSupport"] = args ? args.enableClassiclinkDnsSupport : undefined;
            inputs["enableDnsHostnames"] = args ? args.enableDnsHostnames : undefined;
            inputs["enableDnsSupport"] = args ? args.enableDnsSupport : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["assignGeneratedIpv6CidrBlock"] = undefined /*out*/;
            inputs["cidrBlock"] = undefined /*out*/;
            inputs["defaultNetworkAclId"] = undefined /*out*/;
            inputs["defaultRouteTableId"] = undefined /*out*/;
            inputs["defaultSecurityGroupId"] = undefined /*out*/;
            inputs["dhcpOptionsId"] = undefined /*out*/;
            inputs["instanceTenancy"] = undefined /*out*/;
            inputs["ipv6AssociationId"] = undefined /*out*/;
            inputs["ipv6CidrBlock"] = undefined /*out*/;
            inputs["mainRouteTableId"] = undefined /*out*/;
        }
        super("aws:ec2/defaultVpc:DefaultVpc", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DefaultVpc resources.
 */
export interface DefaultVpcState {
    /**
     * Amazon Resource Name (ARN) of VPC
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * Whether or not an Amazon-provided IPv6 CIDR 
     * block with a /56 prefix length for the VPC was assigned
     */
    readonly assignGeneratedIpv6CidrBlock?: pulumi.Input<boolean>;
    /**
     * The CIDR block of the VPC
     */
    readonly cidrBlock?: pulumi.Input<string>;
    /**
     * The ID of the network ACL created by default on VPC creation
     */
    readonly defaultNetworkAclId?: pulumi.Input<string>;
    /**
     * The ID of the route table created by default on VPC creation
     */
    readonly defaultRouteTableId?: pulumi.Input<string>;
    /**
     * The ID of the security group created by default on VPC creation
     */
    readonly defaultSecurityGroupId?: pulumi.Input<string>;
    readonly dhcpOptionsId?: pulumi.Input<string>;
    /**
     * A boolean flag to enable/disable ClassicLink 
     * for the VPC. Only valid in regions and accounts that support EC2 Classic.
     * See the [ClassicLink documentation][1] for more information. Defaults false.
     */
    readonly enableClassiclink?: pulumi.Input<boolean>;
    readonly enableClassiclinkDnsSupport?: pulumi.Input<boolean>;
    /**
     * A boolean flag to enable/disable DNS hostnames in the VPC. Defaults false.
     */
    readonly enableDnsHostnames?: pulumi.Input<boolean>;
    /**
     * A boolean flag to enable/disable DNS support in the VPC. Defaults true.
     */
    readonly enableDnsSupport?: pulumi.Input<boolean>;
    /**
     * Tenancy of instances spin up within VPC.
     */
    readonly instanceTenancy?: pulumi.Input<string>;
    /**
     * The association ID for the IPv6 CIDR block of the VPC
     */
    readonly ipv6AssociationId?: pulumi.Input<string>;
    /**
     * The IPv6 CIDR block of the VPC
     */
    readonly ipv6CidrBlock?: pulumi.Input<string>;
    /**
     * The ID of the main route table associated with
     * this VPC. Note that you can change a VPC's main route table by using an
     * [`aws_main_route_table_association`](https://www.terraform.io/docs/providers/aws/r/main_route_table_assoc.html)
     */
    readonly mainRouteTableId?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<Tags>;
}

/**
 * The set of arguments for constructing a DefaultVpc resource.
 */
export interface DefaultVpcArgs {
    /**
     * A boolean flag to enable/disable ClassicLink 
     * for the VPC. Only valid in regions and accounts that support EC2 Classic.
     * See the [ClassicLink documentation][1] for more information. Defaults false.
     */
    readonly enableClassiclink?: pulumi.Input<boolean>;
    readonly enableClassiclinkDnsSupport?: pulumi.Input<boolean>;
    /**
     * A boolean flag to enable/disable DNS hostnames in the VPC. Defaults false.
     */
    readonly enableDnsHostnames?: pulumi.Input<boolean>;
    /**
     * A boolean flag to enable/disable DNS support in the VPC. Defaults true.
     */
    readonly enableDnsSupport?: pulumi.Input<boolean>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<Tags>;
}
