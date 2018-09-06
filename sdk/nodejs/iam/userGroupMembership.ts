// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a resource for adding an [IAM User][2] to [IAM Groups][1]. This
 * resource can be used multiple times with the same user for non-overlapping
 * groups.
 * 
 * To exclusively manage the users in a group, see the
 * [`aws_iam_group_membership` resource][3].
 */
export class UserGroupMembership extends pulumi.CustomResource {
    /**
     * Get an existing UserGroupMembership resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserGroupMembershipState): UserGroupMembership {
        return new UserGroupMembership(name, <any>state, { id });
    }

    /**
     * A list of [IAM Groups][1] to add the user to
     */
    public readonly groups: pulumi.Output<string[]>;
    /**
     * The name of the [IAM User][2] to add to groups
     */
    public readonly user: pulumi.Output<string>;

    /**
     * Create a UserGroupMembership resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserGroupMembershipArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserGroupMembershipArgs | UserGroupMembershipState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: UserGroupMembershipState = argsOrState as UserGroupMembershipState | undefined;
            inputs["groups"] = state ? state.groups : undefined;
            inputs["user"] = state ? state.user : undefined;
        } else {
            const args = argsOrState as UserGroupMembershipArgs | undefined;
            if (!args || args.groups === undefined) {
                throw new Error("Missing required property 'groups'");
            }
            if (!args || args.user === undefined) {
                throw new Error("Missing required property 'user'");
            }
            inputs["groups"] = args ? args.groups : undefined;
            inputs["user"] = args ? args.user : undefined;
        }
        super("aws:iam/userGroupMembership:UserGroupMembership", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering UserGroupMembership resources.
 */
export interface UserGroupMembershipState {
    /**
     * A list of [IAM Groups][1] to add the user to
     */
    readonly groups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the [IAM User][2] to add to groups
     */
    readonly user?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a UserGroupMembership resource.
 */
export interface UserGroupMembershipArgs {
    /**
     * A list of [IAM Groups][1] to add the user to
     */
    readonly groups: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the [IAM User][2] to add to groups
     */
    readonly user: pulumi.Input<string>;
}
