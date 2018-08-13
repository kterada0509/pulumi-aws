// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Manages an AWS Storage Gateway file, tape, or volume gateway in the provider region.
 * 
 * ~> NOTE: The Storage Gateway API requires the gateway to be connected to properly return information after activation. If you are receiving `The specified gateway is not connected` errors during resource creation (gateway activation), ensure your gateway instance meets the [Storage Gateway requirements](https://docs.aws.amazon.com/storagegateway/latest/userguide/Requirements.html).
 */
export class Gateway extends pulumi.CustomResource {
    /**
     * Get an existing Gateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GatewayState): Gateway {
        return new Gateway(name, <any>state, { id });
    }

    /**
     * Gateway activation key during resource creation. Conflicts with `gateway_ip_address`. Additional information is available in the [Storage Gateway User Guide](https://docs.aws.amazon.com/storagegateway/latest/userguide/get-activation-key.html).
     */
    public readonly activationKey: pulumi.Output<string>;
    /**
     * Amazon Resource Name (ARN) of the gateway.
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * Identifier of the gateway.
     */
    public /*out*/ readonly gatewayId: pulumi.Output<string>;
    /**
     * Gateway IP address to retrieve activation key during resource creation. Conflicts with `activation_key`. Gateway must be accessible on port 80 from where Terraform is running. Additional information is available in the [Storage Gateway User Guide](https://docs.aws.amazon.com/storagegateway/latest/userguide/get-activation-key.html).
     */
    public readonly gatewayIpAddress: pulumi.Output<string>;
    /**
     * Name of the gateway.
     */
    public readonly gatewayName: pulumi.Output<string>;
    /**
     * Time zone for the gateway. The time zone is of the format "GMT", "GMT-hr:mm", or "GMT+hr:mm". For example, `GMT-4:00` indicates the time is 4 hours behind GMT. The time zone is used, for example, for scheduling snapshots and your gateway's maintenance schedule.
     */
    public readonly gatewayTimezone: pulumi.Output<string>;
    /**
     * Type of the gateway. The default value is `STORED`. Valid values: `CACHED`, `FILE_S3`, `STORED`, `VTL`.
     */
    public readonly gatewayType: pulumi.Output<string | undefined>;
    public readonly mediumChangerType: pulumi.Output<string | undefined>;
    /**
     * Type of tape drive to use for tape gateway. Terraform cannot detect drift of this argument. Valid values: `IBM-ULT3580-TD5`.
     */
    public readonly tapeDriveType: pulumi.Output<string | undefined>;

    /**
     * Create a Gateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GatewayArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GatewayArgs | GatewayState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: GatewayState = argsOrState as GatewayState | undefined;
            inputs["activationKey"] = state ? state.activationKey : undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["gatewayId"] = state ? state.gatewayId : undefined;
            inputs["gatewayIpAddress"] = state ? state.gatewayIpAddress : undefined;
            inputs["gatewayName"] = state ? state.gatewayName : undefined;
            inputs["gatewayTimezone"] = state ? state.gatewayTimezone : undefined;
            inputs["gatewayType"] = state ? state.gatewayType : undefined;
            inputs["mediumChangerType"] = state ? state.mediumChangerType : undefined;
            inputs["tapeDriveType"] = state ? state.tapeDriveType : undefined;
        } else {
            const args = argsOrState as GatewayArgs | undefined;
            if (!args || args.gatewayName === undefined) {
                throw new Error("Missing required property 'gatewayName'");
            }
            if (!args || args.gatewayTimezone === undefined) {
                throw new Error("Missing required property 'gatewayTimezone'");
            }
            inputs["activationKey"] = args ? args.activationKey : undefined;
            inputs["gatewayIpAddress"] = args ? args.gatewayIpAddress : undefined;
            inputs["gatewayName"] = args ? args.gatewayName : undefined;
            inputs["gatewayTimezone"] = args ? args.gatewayTimezone : undefined;
            inputs["gatewayType"] = args ? args.gatewayType : undefined;
            inputs["mediumChangerType"] = args ? args.mediumChangerType : undefined;
            inputs["tapeDriveType"] = args ? args.tapeDriveType : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["gatewayId"] = undefined /*out*/;
        }
        super("aws:storagegateway/gateway:Gateway", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Gateway resources.
 */
export interface GatewayState {
    /**
     * Gateway activation key during resource creation. Conflicts with `gateway_ip_address`. Additional information is available in the [Storage Gateway User Guide](https://docs.aws.amazon.com/storagegateway/latest/userguide/get-activation-key.html).
     */
    readonly activationKey?: pulumi.Input<string>;
    /**
     * Amazon Resource Name (ARN) of the gateway.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * Identifier of the gateway.
     */
    readonly gatewayId?: pulumi.Input<string>;
    /**
     * Gateway IP address to retrieve activation key during resource creation. Conflicts with `activation_key`. Gateway must be accessible on port 80 from where Terraform is running. Additional information is available in the [Storage Gateway User Guide](https://docs.aws.amazon.com/storagegateway/latest/userguide/get-activation-key.html).
     */
    readonly gatewayIpAddress?: pulumi.Input<string>;
    /**
     * Name of the gateway.
     */
    readonly gatewayName?: pulumi.Input<string>;
    /**
     * Time zone for the gateway. The time zone is of the format "GMT", "GMT-hr:mm", or "GMT+hr:mm". For example, `GMT-4:00` indicates the time is 4 hours behind GMT. The time zone is used, for example, for scheduling snapshots and your gateway's maintenance schedule.
     */
    readonly gatewayTimezone?: pulumi.Input<string>;
    /**
     * Type of the gateway. The default value is `STORED`. Valid values: `CACHED`, `FILE_S3`, `STORED`, `VTL`.
     */
    readonly gatewayType?: pulumi.Input<string>;
    readonly mediumChangerType?: pulumi.Input<string>;
    /**
     * Type of tape drive to use for tape gateway. Terraform cannot detect drift of this argument. Valid values: `IBM-ULT3580-TD5`.
     */
    readonly tapeDriveType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Gateway resource.
 */
export interface GatewayArgs {
    /**
     * Gateway activation key during resource creation. Conflicts with `gateway_ip_address`. Additional information is available in the [Storage Gateway User Guide](https://docs.aws.amazon.com/storagegateway/latest/userguide/get-activation-key.html).
     */
    readonly activationKey?: pulumi.Input<string>;
    /**
     * Gateway IP address to retrieve activation key during resource creation. Conflicts with `activation_key`. Gateway must be accessible on port 80 from where Terraform is running. Additional information is available in the [Storage Gateway User Guide](https://docs.aws.amazon.com/storagegateway/latest/userguide/get-activation-key.html).
     */
    readonly gatewayIpAddress?: pulumi.Input<string>;
    /**
     * Name of the gateway.
     */
    readonly gatewayName: pulumi.Input<string>;
    /**
     * Time zone for the gateway. The time zone is of the format "GMT", "GMT-hr:mm", or "GMT+hr:mm". For example, `GMT-4:00` indicates the time is 4 hours behind GMT. The time zone is used, for example, for scheduling snapshots and your gateway's maintenance schedule.
     */
    readonly gatewayTimezone: pulumi.Input<string>;
    /**
     * Type of the gateway. The default value is `STORED`. Valid values: `CACHED`, `FILE_S3`, `STORED`, `VTL`.
     */
    readonly gatewayType?: pulumi.Input<string>;
    readonly mediumChangerType?: pulumi.Input<string>;
    /**
     * Type of tape drive to use for tape gateway. Terraform cannot detect drift of this argument. Valid values: `IBM-ULT3580-TD5`.
     */
    readonly tapeDriveType?: pulumi.Input<string>;
}
