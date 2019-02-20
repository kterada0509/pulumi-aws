// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a KMS customer master key.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const key = new aws.kms.Key("a", {
 *     deletionWindowInDays: 10,
 *     description: "KMS key 1",
 * });
 * ```
 */
export class Key extends pulumi.CustomResource {
    /**
     * Get an existing Key resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KeyState, opts?: pulumi.CustomResourceOptions): Key {
        return new Key(name, <any>state, { ...opts, id: id });
    }

    /**
     * The Amazon Resource Name (ARN) of the key.
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * Duration in days after which the key is deleted
     * after destruction of the resource, must be between 7 and 30 days. Defaults to 30 days.
     */
    public readonly deletionWindowInDays: pulumi.Output<number | undefined>;
    /**
     * The description of the key as viewed in AWS console.
     */
    public readonly description: pulumi.Output<string>;
    /**
     * Specifies whether [key rotation](http://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html)
     * is enabled. Defaults to false.
     */
    public readonly enableKeyRotation: pulumi.Output<boolean | undefined>;
    /**
     * Specifies whether the key is enabled. Defaults to true.
     */
    public readonly isEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The globally unique identifier for the key.
     */
    public /*out*/ readonly keyId: pulumi.Output<string>;
    /**
     * Specifies the intended use of the key.
     * Defaults to ENCRYPT_DECRYPT, and only symmetric encryption and decryption are supported.
     */
    public readonly keyUsage: pulumi.Output<string>;
    /**
     * A valid policy JSON document. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://www.terraform.io/docs/providers/aws/guides/iam-policy-documents.html).
     */
    public readonly policy: pulumi.Output<string>;
    /**
     * A mapping of tags to assign to the object.
     */
    public readonly tags: pulumi.Output<{[key: string]: any} | undefined>;

    /**
     * Create a Key resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: KeyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KeyArgs | KeyState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: KeyState = argsOrState as KeyState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["deletionWindowInDays"] = state ? state.deletionWindowInDays : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["enableKeyRotation"] = state ? state.enableKeyRotation : undefined;
            inputs["isEnabled"] = state ? state.isEnabled : undefined;
            inputs["keyId"] = state ? state.keyId : undefined;
            inputs["keyUsage"] = state ? state.keyUsage : undefined;
            inputs["policy"] = state ? state.policy : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as KeyArgs | undefined;
            inputs["deletionWindowInDays"] = args ? args.deletionWindowInDays : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["enableKeyRotation"] = args ? args.enableKeyRotation : undefined;
            inputs["isEnabled"] = args ? args.isEnabled : undefined;
            inputs["keyUsage"] = args ? args.keyUsage : undefined;
            inputs["policy"] = args ? args.policy : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["keyId"] = undefined /*out*/;
        }
        super("aws:kms/key:Key", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Key resources.
 */
export interface KeyState {
    /**
     * The Amazon Resource Name (ARN) of the key.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * Duration in days after which the key is deleted
     * after destruction of the resource, must be between 7 and 30 days. Defaults to 30 days.
     */
    readonly deletionWindowInDays?: pulumi.Input<number>;
    /**
     * The description of the key as viewed in AWS console.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Specifies whether [key rotation](http://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html)
     * is enabled. Defaults to false.
     */
    readonly enableKeyRotation?: pulumi.Input<boolean>;
    /**
     * Specifies whether the key is enabled. Defaults to true.
     */
    readonly isEnabled?: pulumi.Input<boolean>;
    /**
     * The globally unique identifier for the key.
     */
    readonly keyId?: pulumi.Input<string>;
    /**
     * Specifies the intended use of the key.
     * Defaults to ENCRYPT_DECRYPT, and only symmetric encryption and decryption are supported.
     */
    readonly keyUsage?: pulumi.Input<string>;
    /**
     * A valid policy JSON document. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://www.terraform.io/docs/providers/aws/guides/iam-policy-documents.html).
     */
    readonly policy?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the object.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a Key resource.
 */
export interface KeyArgs {
    /**
     * Duration in days after which the key is deleted
     * after destruction of the resource, must be between 7 and 30 days. Defaults to 30 days.
     */
    readonly deletionWindowInDays?: pulumi.Input<number>;
    /**
     * The description of the key as viewed in AWS console.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Specifies whether [key rotation](http://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html)
     * is enabled. Defaults to false.
     */
    readonly enableKeyRotation?: pulumi.Input<boolean>;
    /**
     * Specifies whether the key is enabled. Defaults to true.
     */
    readonly isEnabled?: pulumi.Input<boolean>;
    /**
     * Specifies the intended use of the key.
     * Defaults to ENCRYPT_DECRYPT, and only symmetric encryption and decryption are supported.
     */
    readonly keyUsage?: pulumi.Input<string>;
    /**
     * A valid policy JSON document. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://www.terraform.io/docs/providers/aws/guides/iam-policy-documents.html).
     */
    readonly policy?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the object.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The live Key resource.
 */
export interface KeyResult {
    /**
     * The Amazon Resource Name (ARN) of the key.
     */
    readonly arn: string;
    /**
     * Duration in days after which the key is deleted
     * after destruction of the resource, must be between 7 and 30 days. Defaults to 30 days.
     */
    readonly deletionWindowInDays?: number;
    /**
     * The description of the key as viewed in AWS console.
     */
    readonly description: string;
    /**
     * Specifies whether [key rotation](http://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html)
     * is enabled. Defaults to false.
     */
    readonly enableKeyRotation?: boolean;
    /**
     * Specifies whether the key is enabled. Defaults to true.
     */
    readonly isEnabled?: boolean;
    /**
     * The globally unique identifier for the key.
     */
    readonly keyId: string;
    /**
     * Specifies the intended use of the key.
     * Defaults to ENCRYPT_DECRYPT, and only symmetric encryption and decryption are supported.
     */
    readonly keyUsage: string;
    /**
     * A valid policy JSON document. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://www.terraform.io/docs/providers/aws/guides/iam-policy-documents.html).
     */
    readonly policy: string;
    /**
     * A mapping of tags to assign to the object.
     */
    readonly tags?: {[key: string]: any};
}
