// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

import {Tags} from "../index";

/**
 * Provides a resource to manage the default AWS Network ACL. VPC Only.
 * 
 * Each VPC created in AWS comes with a Default Network ACL that can be managed, but not
 * destroyed. **This is an advanced resource**, and has special caveats to be aware
 * of when using it. Please read this document in its entirety before using this
 * resource.
 * 
 * The `aws_default_network_acl` behaves differently from normal resources, in that
 * Terraform does not _create_ this resource, but instead attempts to "adopt" it
 * into management. We can do this because each VPC created has a Default Network
 * ACL that cannot be destroyed, and is created with a known set of default rules.
 * 
 * When Terraform first adopts the Default Network ACL, it **immediately removes all
 * rules in the ACL**. It then proceeds to create any rules specified in the
 * configuration. This step is required so that only the rules specified in the
 * configuration are created.
 * 
 * This resource treats its inline rules as absolute; only the rules defined
 * inline are created, and any additions/removals external to this resource will
 * result in diffs being shown. For these reasons, this resource is incompatible with the
 * `aws_network_acl_rule` resource.
 * 
 * For more information about Network ACLs, see the AWS Documentation on
 * [Network ACLs][aws-network-acls].
 */
export class DefaultNetworkAcl extends pulumi.CustomResource {
    /**
     * Get an existing DefaultNetworkAcl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DefaultNetworkAclState): DefaultNetworkAcl {
        return new DefaultNetworkAcl(name, <any>state, { id });
    }

    /**
     * The Network ACL ID to manage. This
     * attribute is exported from `aws_vpc`, or manually found via the AWS Console.
     */
    public readonly defaultNetworkAclId: pulumi.Output<string>;
    /**
     * Specifies an egress rule. Parameters defined below.
     */
    public readonly egress: pulumi.Output<{ action: string, cidrBlock?: string, fromPort: number, icmpCode?: number, icmpType?: number, ipv6CidrBlock?: string, protocol: string, ruleNo: number, toPort: number }[] | undefined>;
    /**
     * Specifies an ingress rule. Parameters defined below.
     */
    public readonly ingress: pulumi.Output<{ action: string, cidrBlock?: string, fromPort: number, icmpCode?: number, icmpType?: number, ipv6CidrBlock?: string, protocol: string, ruleNo: number, toPort: number }[] | undefined>;
    /**
     * A list of Subnet IDs to apply the ACL to. See the
     * notes below on managing Subnets in the Default Network ACL
     */
    public readonly subnetIds: pulumi.Output<string[] | undefined>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags: pulumi.Output<Tags | undefined>;
    /**
     * The ID of the associated VPC
     */
    public /*out*/ readonly vpcId: pulumi.Output<string>;

    /**
     * Create a DefaultNetworkAcl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DefaultNetworkAclArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DefaultNetworkAclArgs | DefaultNetworkAclState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: DefaultNetworkAclState = argsOrState as DefaultNetworkAclState | undefined;
            inputs["defaultNetworkAclId"] = state ? state.defaultNetworkAclId : undefined;
            inputs["egress"] = state ? state.egress : undefined;
            inputs["ingress"] = state ? state.ingress : undefined;
            inputs["subnetIds"] = state ? state.subnetIds : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as DefaultNetworkAclArgs | undefined;
            if (!args || args.defaultNetworkAclId === undefined) {
                throw new Error("Missing required property 'defaultNetworkAclId'");
            }
            inputs["defaultNetworkAclId"] = args ? args.defaultNetworkAclId : undefined;
            inputs["egress"] = args ? args.egress : undefined;
            inputs["ingress"] = args ? args.ingress : undefined;
            inputs["subnetIds"] = args ? args.subnetIds : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["vpcId"] = undefined /*out*/;
        }
        super("aws:ec2/defaultNetworkAcl:DefaultNetworkAcl", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering DefaultNetworkAcl resources.
 */
export interface DefaultNetworkAclState {
    /**
     * The Network ACL ID to manage. This
     * attribute is exported from `aws_vpc`, or manually found via the AWS Console.
     */
    readonly defaultNetworkAclId?: pulumi.Input<string>;
    /**
     * Specifies an egress rule. Parameters defined below.
     */
    readonly egress?: pulumi.Input<pulumi.Input<{ action: pulumi.Input<string>, cidrBlock?: pulumi.Input<string>, fromPort: pulumi.Input<number>, icmpCode?: pulumi.Input<number>, icmpType?: pulumi.Input<number>, ipv6CidrBlock?: pulumi.Input<string>, protocol: pulumi.Input<string>, ruleNo: pulumi.Input<number>, toPort: pulumi.Input<number> }>[]>;
    /**
     * Specifies an ingress rule. Parameters defined below.
     */
    readonly ingress?: pulumi.Input<pulumi.Input<{ action: pulumi.Input<string>, cidrBlock?: pulumi.Input<string>, fromPort: pulumi.Input<number>, icmpCode?: pulumi.Input<number>, icmpType?: pulumi.Input<number>, ipv6CidrBlock?: pulumi.Input<string>, protocol: pulumi.Input<string>, ruleNo: pulumi.Input<number>, toPort: pulumi.Input<number> }>[]>;
    /**
     * A list of Subnet IDs to apply the ACL to. See the
     * notes below on managing Subnets in the Default Network ACL
     */
    readonly subnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<Tags>;
    /**
     * The ID of the associated VPC
     */
    readonly vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DefaultNetworkAcl resource.
 */
export interface DefaultNetworkAclArgs {
    /**
     * The Network ACL ID to manage. This
     * attribute is exported from `aws_vpc`, or manually found via the AWS Console.
     */
    readonly defaultNetworkAclId: pulumi.Input<string>;
    /**
     * Specifies an egress rule. Parameters defined below.
     */
    readonly egress?: pulumi.Input<pulumi.Input<{ action: pulumi.Input<string>, cidrBlock?: pulumi.Input<string>, fromPort: pulumi.Input<number>, icmpCode?: pulumi.Input<number>, icmpType?: pulumi.Input<number>, ipv6CidrBlock?: pulumi.Input<string>, protocol: pulumi.Input<string>, ruleNo: pulumi.Input<number>, toPort: pulumi.Input<number> }>[]>;
    /**
     * Specifies an ingress rule. Parameters defined below.
     */
    readonly ingress?: pulumi.Input<pulumi.Input<{ action: pulumi.Input<string>, cidrBlock?: pulumi.Input<string>, fromPort: pulumi.Input<number>, icmpCode?: pulumi.Input<number>, icmpType?: pulumi.Input<number>, ipv6CidrBlock?: pulumi.Input<string>, protocol: pulumi.Input<string>, ruleNo: pulumi.Input<number>, toPort: pulumi.Input<number> }>[]>;
    /**
     * A list of Subnet IDs to apply the ACL to. See the
     * notes below on managing Subnets in the Default Network ACL
     */
    readonly subnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<Tags>;
}
