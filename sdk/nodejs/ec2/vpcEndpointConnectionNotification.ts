// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Provides a VPC Endpoint connection notification resource.
 * Connection notifications notify subscribers of VPC Endpoint events.
 */
export class VpcEndpointConnectionNotification extends pulumi.CustomResource {
    /**
     * Get an existing VpcEndpointConnectionNotification resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpcEndpointConnectionNotificationState): VpcEndpointConnectionNotification {
        return new VpcEndpointConnectionNotification(name, <any>state, { id });
    }

    /**
     * One or more endpoint [events](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcEndpointConnectionNotification.html#API_CreateVpcEndpointConnectionNotification_RequestParameters) for which to receive notifications.
     */
    public readonly connectionEvents: pulumi.Output<string[]>;
    /**
     * The ARN of the SNS topic for the notifications.
     */
    public readonly connectionNotificationArn: pulumi.Output<string>;
    /**
     * The type of notification.
     */
    public /*out*/ readonly notificationType: pulumi.Output<string>;
    /**
     * The state of the notification.
     */
    public /*out*/ readonly state: pulumi.Output<string>;
    /**
     * The ID of the VPC Endpoint to receive notifications for.
     */
    public readonly vpcEndpointId: pulumi.Output<string | undefined>;
    /**
     * The ID of the VPC Endpoint Service to receive notifications for.
     */
    public readonly vpcEndpointServiceId: pulumi.Output<string | undefined>;

    /**
     * Create a VpcEndpointConnectionNotification resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpcEndpointConnectionNotificationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpcEndpointConnectionNotificationArgs | VpcEndpointConnectionNotificationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: VpcEndpointConnectionNotificationState = argsOrState as VpcEndpointConnectionNotificationState | undefined;
            inputs["connectionEvents"] = state ? state.connectionEvents : undefined;
            inputs["connectionNotificationArn"] = state ? state.connectionNotificationArn : undefined;
            inputs["notificationType"] = state ? state.notificationType : undefined;
            inputs["state"] = state ? state.state : undefined;
            inputs["vpcEndpointId"] = state ? state.vpcEndpointId : undefined;
            inputs["vpcEndpointServiceId"] = state ? state.vpcEndpointServiceId : undefined;
        } else {
            const args = argsOrState as VpcEndpointConnectionNotificationArgs | undefined;
            if (!args || args.connectionEvents === undefined) {
                throw new Error("Missing required property 'connectionEvents'");
            }
            if (!args || args.connectionNotificationArn === undefined) {
                throw new Error("Missing required property 'connectionNotificationArn'");
            }
            inputs["connectionEvents"] = args ? args.connectionEvents : undefined;
            inputs["connectionNotificationArn"] = args ? args.connectionNotificationArn : undefined;
            inputs["vpcEndpointId"] = args ? args.vpcEndpointId : undefined;
            inputs["vpcEndpointServiceId"] = args ? args.vpcEndpointServiceId : undefined;
            inputs["notificationType"] = undefined /*out*/;
            inputs["state"] = undefined /*out*/;
        }
        super("aws:ec2/vpcEndpointConnectionNotification:VpcEndpointConnectionNotification", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering VpcEndpointConnectionNotification resources.
 */
export interface VpcEndpointConnectionNotificationState {
    /**
     * One or more endpoint [events](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcEndpointConnectionNotification.html#API_CreateVpcEndpointConnectionNotification_RequestParameters) for which to receive notifications.
     */
    readonly connectionEvents?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ARN of the SNS topic for the notifications.
     */
    readonly connectionNotificationArn?: pulumi.Input<string>;
    /**
     * The type of notification.
     */
    readonly notificationType?: pulumi.Input<string>;
    /**
     * The state of the notification.
     */
    readonly state?: pulumi.Input<string>;
    /**
     * The ID of the VPC Endpoint to receive notifications for.
     */
    readonly vpcEndpointId?: pulumi.Input<string>;
    /**
     * The ID of the VPC Endpoint Service to receive notifications for.
     */
    readonly vpcEndpointServiceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VpcEndpointConnectionNotification resource.
 */
export interface VpcEndpointConnectionNotificationArgs {
    /**
     * One or more endpoint [events](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVpcEndpointConnectionNotification.html#API_CreateVpcEndpointConnectionNotification_RequestParameters) for which to receive notifications.
     */
    readonly connectionEvents: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ARN of the SNS topic for the notifications.
     */
    readonly connectionNotificationArn: pulumi.Input<string>;
    /**
     * The ID of the VPC Endpoint to receive notifications for.
     */
    readonly vpcEndpointId?: pulumi.Input<string>;
    /**
     * The ID of the VPC Endpoint Service to receive notifications for.
     */
    readonly vpcEndpointServiceId?: pulumi.Input<string>;
}
