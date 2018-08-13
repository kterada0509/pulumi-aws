// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Provides an OpsWorks permission resource.
 */
export class Permission extends pulumi.CustomResource {
    /**
     * Get an existing Permission resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PermissionState): Permission {
        return new Permission(name, <any>state, { id });
    }

    /**
     * Whether the user is allowed to use SSH to communicate with the instance
     */
    public readonly allowSsh: pulumi.Output<boolean>;
    /**
     * Whether the user is allowed to use sudo to elevate privileges
     */
    public readonly allowSudo: pulumi.Output<boolean>;
    /**
     * The users permission level. Mus be one of `deny`, `show`, `deploy`, `manage`, `iam_only`
     */
    public readonly level: pulumi.Output<string>;
    /**
     * The stack to set the permissions for
     */
    public readonly stackId: pulumi.Output<string>;
    /**
     * The user's IAM ARN to set permissions for
     */
    public readonly userArn: pulumi.Output<string>;

    /**
     * Create a Permission resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PermissionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PermissionArgs | PermissionState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: PermissionState = argsOrState as PermissionState | undefined;
            inputs["allowSsh"] = state ? state.allowSsh : undefined;
            inputs["allowSudo"] = state ? state.allowSudo : undefined;
            inputs["level"] = state ? state.level : undefined;
            inputs["stackId"] = state ? state.stackId : undefined;
            inputs["userArn"] = state ? state.userArn : undefined;
        } else {
            const args = argsOrState as PermissionArgs | undefined;
            if (!args || args.userArn === undefined) {
                throw new Error("Missing required property 'userArn'");
            }
            inputs["allowSsh"] = args ? args.allowSsh : undefined;
            inputs["allowSudo"] = args ? args.allowSudo : undefined;
            inputs["level"] = args ? args.level : undefined;
            inputs["stackId"] = args ? args.stackId : undefined;
            inputs["userArn"] = args ? args.userArn : undefined;
        }
        super("aws:opsworks/permission:Permission", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Permission resources.
 */
export interface PermissionState {
    /**
     * Whether the user is allowed to use SSH to communicate with the instance
     */
    readonly allowSsh?: pulumi.Input<boolean>;
    /**
     * Whether the user is allowed to use sudo to elevate privileges
     */
    readonly allowSudo?: pulumi.Input<boolean>;
    /**
     * The users permission level. Mus be one of `deny`, `show`, `deploy`, `manage`, `iam_only`
     */
    readonly level?: pulumi.Input<string>;
    /**
     * The stack to set the permissions for
     */
    readonly stackId?: pulumi.Input<string>;
    /**
     * The user's IAM ARN to set permissions for
     */
    readonly userArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Permission resource.
 */
export interface PermissionArgs {
    /**
     * Whether the user is allowed to use SSH to communicate with the instance
     */
    readonly allowSsh?: pulumi.Input<boolean>;
    /**
     * Whether the user is allowed to use sudo to elevate privileges
     */
    readonly allowSudo?: pulumi.Input<boolean>;
    /**
     * The users permission level. Mus be one of `deny`, `show`, `deploy`, `manage`, `iam_only`
     */
    readonly level?: pulumi.Input<string>;
    /**
     * The stack to set the permissions for
     */
    readonly stackId?: pulumi.Input<string>;
    /**
     * The user's IAM ARN to set permissions for
     */
    readonly userArn: pulumi.Input<string>;
}
