// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Associates a Direct Connect Gateway with a VGW.
 */
export class GatewayAssociation extends pulumi.CustomResource {
    /**
     * Get an existing GatewayAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GatewayAssociationState): GatewayAssociation {
        return new GatewayAssociation(name, <any>state, { id });
    }

    /**
     * The ID of the Direct Connect Gateway.
     */
    public readonly dxGatewayId: pulumi.Output<string>;
    /**
     * The ID of the VGW with which to associate the gateway.
     */
    public readonly vpnGatewayId: pulumi.Output<string>;

    /**
     * Create a GatewayAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GatewayAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GatewayAssociationArgs | GatewayAssociationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: GatewayAssociationState = argsOrState as GatewayAssociationState | undefined;
            inputs["dxGatewayId"] = state ? state.dxGatewayId : undefined;
            inputs["vpnGatewayId"] = state ? state.vpnGatewayId : undefined;
        } else {
            const args = argsOrState as GatewayAssociationArgs | undefined;
            if (!args || args.dxGatewayId === undefined) {
                throw new Error("Missing required property 'dxGatewayId'");
            }
            if (!args || args.vpnGatewayId === undefined) {
                throw new Error("Missing required property 'vpnGatewayId'");
            }
            inputs["dxGatewayId"] = args ? args.dxGatewayId : undefined;
            inputs["vpnGatewayId"] = args ? args.vpnGatewayId : undefined;
        }
        super("aws:directconnect/gatewayAssociation:GatewayAssociation", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering GatewayAssociation resources.
 */
export interface GatewayAssociationState {
    /**
     * The ID of the Direct Connect Gateway.
     */
    readonly dxGatewayId?: pulumi.Input<string>;
    /**
     * The ID of the VGW with which to associate the gateway.
     */
    readonly vpnGatewayId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GatewayAssociation resource.
 */
export interface GatewayAssociationArgs {
    /**
     * The ID of the Direct Connect Gateway.
     */
    readonly dxGatewayId: pulumi.Input<string>;
    /**
     * The ID of the VGW with which to associate the gateway.
     */
    readonly vpnGatewayId: pulumi.Input<string>;
}
