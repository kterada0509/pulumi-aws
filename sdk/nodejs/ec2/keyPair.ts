// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Provides an [EC2 key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) resource. A key pair is used to control login access to EC2 instances.
 * 
 * Currently this resource requires an existing user-supplied key pair. This key pair's public key will be registered with AWS to allow logging-in to EC2 instances.
 * 
 * When importing an existing key pair the public key material may be in any format supported by AWS. Supported formats (per the [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html#how-to-generate-your-own-key-and-import-it-to-aws)) are:
 * 
 * * OpenSSH public key format (the format in ~/.ssh/authorized_keys)
 * * Base64 encoded DER format
 * * SSH public key file format as specified in RFC4716
 */
export class KeyPair extends pulumi.CustomResource {
    /**
     * Get an existing KeyPair resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: KeyPairState): KeyPair {
        return new KeyPair(name, <any>state, { id });
    }

    /**
     * The MD5 public key fingerprint as specified in section 4 of RFC 4716.
     */
    public /*out*/ readonly fingerprint: pulumi.Output<string>;
    /**
     * The name for the key pair.
     */
    public readonly keyName: pulumi.Output<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `key_name`.
     */
    public readonly keyNamePrefix: pulumi.Output<string | undefined>;
    /**
     * The public key material.
     */
    public readonly publicKey: pulumi.Output<string>;

    /**
     * Create a KeyPair resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KeyPairArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: KeyPairArgs | KeyPairState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: KeyPairState = argsOrState as KeyPairState | undefined;
            inputs["fingerprint"] = state ? state.fingerprint : undefined;
            inputs["keyName"] = state ? state.keyName : undefined;
            inputs["keyNamePrefix"] = state ? state.keyNamePrefix : undefined;
            inputs["publicKey"] = state ? state.publicKey : undefined;
        } else {
            const args = argsOrState as KeyPairArgs | undefined;
            if (!args || args.publicKey === undefined) {
                throw new Error("Missing required property 'publicKey'");
            }
            inputs["keyName"] = args ? args.keyName : undefined;
            inputs["keyNamePrefix"] = args ? args.keyNamePrefix : undefined;
            inputs["publicKey"] = args ? args.publicKey : undefined;
            inputs["fingerprint"] = undefined /*out*/;
        }
        super("aws:ec2/keyPair:KeyPair", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering KeyPair resources.
 */
export interface KeyPairState {
    /**
     * The MD5 public key fingerprint as specified in section 4 of RFC 4716.
     */
    readonly fingerprint?: pulumi.Input<string>;
    /**
     * The name for the key pair.
     */
    readonly keyName?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `key_name`.
     */
    readonly keyNamePrefix?: pulumi.Input<string>;
    /**
     * The public key material.
     */
    readonly publicKey?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a KeyPair resource.
 */
export interface KeyPairArgs {
    /**
     * The name for the key pair.
     */
    readonly keyName?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `key_name`.
     */
    readonly keyNamePrefix?: pulumi.Input<string>;
    /**
     * The public key material.
     */
    readonly publicKey: pulumi.Input<string>;
}
