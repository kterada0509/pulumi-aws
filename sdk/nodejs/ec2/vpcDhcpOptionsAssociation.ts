// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Provides a VPC DHCP Options Association resource.
 * * Removing the DHCP Options Association automatically sets AWS's `default` DHCP Options Set to the VPC.
 */
export class VpcDhcpOptionsAssociation extends pulumi.CustomResource {
    /**
     * Get an existing VpcDhcpOptionsAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpcDhcpOptionsAssociationState): VpcDhcpOptionsAssociation {
        return new VpcDhcpOptionsAssociation(name, <any>state, { id });
    }

    /**
     * The ID of the DHCP Options Set to associate to the VPC.
     */
    public readonly dhcpOptionsId: pulumi.Output<string>;
    /**
     * The ID of the VPC to which we would like to associate a DHCP Options Set.
     */
    public readonly vpcId: pulumi.Output<string>;

    /**
     * Create a VpcDhcpOptionsAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpcDhcpOptionsAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpcDhcpOptionsAssociationArgs | VpcDhcpOptionsAssociationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: VpcDhcpOptionsAssociationState = argsOrState as VpcDhcpOptionsAssociationState | undefined;
            inputs["dhcpOptionsId"] = state ? state.dhcpOptionsId : undefined;
            inputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as VpcDhcpOptionsAssociationArgs | undefined;
            if (!args || args.dhcpOptionsId === undefined) {
                throw new Error("Missing required property 'dhcpOptionsId'");
            }
            if (!args || args.vpcId === undefined) {
                throw new Error("Missing required property 'vpcId'");
            }
            inputs["dhcpOptionsId"] = args ? args.dhcpOptionsId : undefined;
            inputs["vpcId"] = args ? args.vpcId : undefined;
        }
        super("aws:ec2/vpcDhcpOptionsAssociation:VpcDhcpOptionsAssociation", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering VpcDhcpOptionsAssociation resources.
 */
export interface VpcDhcpOptionsAssociationState {
    /**
     * The ID of the DHCP Options Set to associate to the VPC.
     */
    readonly dhcpOptionsId?: pulumi.Input<string>;
    /**
     * The ID of the VPC to which we would like to associate a DHCP Options Set.
     */
    readonly vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VpcDhcpOptionsAssociation resource.
 */
export interface VpcDhcpOptionsAssociationArgs {
    /**
     * The ID of the DHCP Options Set to associate to the VPC.
     */
    readonly dhcpOptionsId: pulumi.Input<string>;
    /**
     * The ID of the VPC to which we would like to associate a DHCP Options Set.
     */
    readonly vpcId: pulumi.Input<string>;
}
