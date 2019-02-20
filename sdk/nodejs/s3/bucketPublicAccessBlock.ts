// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages S3 bucket-level Public Access Block configuration. For more information about these settings, see the [AWS S3 Block Public Access documentation](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html).
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const exampleBucket = new aws.s3.Bucket("example", {});
 * const exampleBucketPublicAccessBlock = new aws.s3.BucketPublicAccessBlock("example", {
 *     blockPublicAcls: true,
 *     blockPublicPolicy: true,
 *     bucket: aws_s3_bucket_bucket.id,
 * });
 * ```
 */
export class BucketPublicAccessBlock extends pulumi.CustomResource {
    /**
     * Get an existing BucketPublicAccessBlock resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BucketPublicAccessBlockState, opts?: pulumi.CustomResourceOptions): BucketPublicAccessBlock {
        return new BucketPublicAccessBlock(name, <any>state, { ...opts, id: id });
    }

    /**
     * Whether Amazon S3 should block public ACLs for this bucket. Defaults to `false`. Enabling this setting does not affect existing policies or ACLs. When set to `true` causes the following behavior:
     * * PUT Bucket acl and PUT Object acl calls will fail if the specified ACL allows public access.
     * * PUT Object calls will fail if the request includes an object ACL.
     */
    public readonly blockPublicAcls: pulumi.Output<boolean | undefined>;
    /**
     * Whether Amazon S3 should block public bucket policies for this bucket. Defaults to `false`. Enabling this setting does not affect the existing bucket policy. When set to `true` causes Amazon S3 to:
     * * Reject calls to PUT Bucket policy if the specified bucket policy allows public access.
     */
    public readonly blockPublicPolicy: pulumi.Output<boolean | undefined>;
    /**
     * S3 Bucket to which this Public Access Block configuration should be applied.
     */
    public readonly bucket: pulumi.Output<string>;
    /**
     * Whether Amazon S3 should ignore public ACLs for this bucket. Defaults to `false`. Enabling this setting does not affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set. When set to `true` causes Amazon S3 to:
     * * Ignore all public ACLs on buckets in this account and any objects that they contain.
     */
    public readonly ignorePublicAcls: pulumi.Output<boolean | undefined>;
    /**
     * Whether Amazon S3 should restrict public bucket policies for this bucket. Defaults to `false`. Enabling this setting does not affect the previously stored bucket policy, except that public and cross-account access within the public bucket policy, including non-public delegation to specific accounts, is blocked. When set to `true`:
     * * Only the bucket owner and AWS Services can access this buckets if it has a public policy.
     */
    public readonly restrictPublicBuckets: pulumi.Output<boolean | undefined>;

    /**
     * Create a BucketPublicAccessBlock resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BucketPublicAccessBlockArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BucketPublicAccessBlockArgs | BucketPublicAccessBlockState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: BucketPublicAccessBlockState = argsOrState as BucketPublicAccessBlockState | undefined;
            inputs["blockPublicAcls"] = state ? state.blockPublicAcls : undefined;
            inputs["blockPublicPolicy"] = state ? state.blockPublicPolicy : undefined;
            inputs["bucket"] = state ? state.bucket : undefined;
            inputs["ignorePublicAcls"] = state ? state.ignorePublicAcls : undefined;
            inputs["restrictPublicBuckets"] = state ? state.restrictPublicBuckets : undefined;
        } else {
            const args = argsOrState as BucketPublicAccessBlockArgs | undefined;
            if (!args || args.bucket === undefined) {
                throw new Error("Missing required property 'bucket'");
            }
            inputs["blockPublicAcls"] = args ? args.blockPublicAcls : undefined;
            inputs["blockPublicPolicy"] = args ? args.blockPublicPolicy : undefined;
            inputs["bucket"] = args ? args.bucket : undefined;
            inputs["ignorePublicAcls"] = args ? args.ignorePublicAcls : undefined;
            inputs["restrictPublicBuckets"] = args ? args.restrictPublicBuckets : undefined;
        }
        super("aws:s3/bucketPublicAccessBlock:BucketPublicAccessBlock", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering BucketPublicAccessBlock resources.
 */
export interface BucketPublicAccessBlockState {
    /**
     * Whether Amazon S3 should block public ACLs for this bucket. Defaults to `false`. Enabling this setting does not affect existing policies or ACLs. When set to `true` causes the following behavior:
     * * PUT Bucket acl and PUT Object acl calls will fail if the specified ACL allows public access.
     * * PUT Object calls will fail if the request includes an object ACL.
     */
    readonly blockPublicAcls?: pulumi.Input<boolean>;
    /**
     * Whether Amazon S3 should block public bucket policies for this bucket. Defaults to `false`. Enabling this setting does not affect the existing bucket policy. When set to `true` causes Amazon S3 to:
     * * Reject calls to PUT Bucket policy if the specified bucket policy allows public access.
     */
    readonly blockPublicPolicy?: pulumi.Input<boolean>;
    /**
     * S3 Bucket to which this Public Access Block configuration should be applied.
     */
    readonly bucket?: pulumi.Input<string>;
    /**
     * Whether Amazon S3 should ignore public ACLs for this bucket. Defaults to `false`. Enabling this setting does not affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set. When set to `true` causes Amazon S3 to:
     * * Ignore all public ACLs on buckets in this account and any objects that they contain.
     */
    readonly ignorePublicAcls?: pulumi.Input<boolean>;
    /**
     * Whether Amazon S3 should restrict public bucket policies for this bucket. Defaults to `false`. Enabling this setting does not affect the previously stored bucket policy, except that public and cross-account access within the public bucket policy, including non-public delegation to specific accounts, is blocked. When set to `true`:
     * * Only the bucket owner and AWS Services can access this buckets if it has a public policy.
     */
    readonly restrictPublicBuckets?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a BucketPublicAccessBlock resource.
 */
export interface BucketPublicAccessBlockArgs {
    /**
     * Whether Amazon S3 should block public ACLs for this bucket. Defaults to `false`. Enabling this setting does not affect existing policies or ACLs. When set to `true` causes the following behavior:
     * * PUT Bucket acl and PUT Object acl calls will fail if the specified ACL allows public access.
     * * PUT Object calls will fail if the request includes an object ACL.
     */
    readonly blockPublicAcls?: pulumi.Input<boolean>;
    /**
     * Whether Amazon S3 should block public bucket policies for this bucket. Defaults to `false`. Enabling this setting does not affect the existing bucket policy. When set to `true` causes Amazon S3 to:
     * * Reject calls to PUT Bucket policy if the specified bucket policy allows public access.
     */
    readonly blockPublicPolicy?: pulumi.Input<boolean>;
    /**
     * S3 Bucket to which this Public Access Block configuration should be applied.
     */
    readonly bucket: pulumi.Input<string>;
    /**
     * Whether Amazon S3 should ignore public ACLs for this bucket. Defaults to `false`. Enabling this setting does not affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set. When set to `true` causes Amazon S3 to:
     * * Ignore all public ACLs on buckets in this account and any objects that they contain.
     */
    readonly ignorePublicAcls?: pulumi.Input<boolean>;
    /**
     * Whether Amazon S3 should restrict public bucket policies for this bucket. Defaults to `false`. Enabling this setting does not affect the previously stored bucket policy, except that public and cross-account access within the public bucket policy, including non-public delegation to specific accounts, is blocked. When set to `true`:
     * * Only the bucket owner and AWS Services can access this buckets if it has a public policy.
     */
    readonly restrictPublicBuckets?: pulumi.Input<boolean>;
}

/**
 * The live BucketPublicAccessBlock resource.
 */
export interface BucketPublicAccessBlockResult {
    /**
     * Whether Amazon S3 should block public ACLs for this bucket. Defaults to `false`. Enabling this setting does not affect existing policies or ACLs. When set to `true` causes the following behavior:
     * * PUT Bucket acl and PUT Object acl calls will fail if the specified ACL allows public access.
     * * PUT Object calls will fail if the request includes an object ACL.
     */
    readonly blockPublicAcls?: boolean;
    /**
     * Whether Amazon S3 should block public bucket policies for this bucket. Defaults to `false`. Enabling this setting does not affect the existing bucket policy. When set to `true` causes Amazon S3 to:
     * * Reject calls to PUT Bucket policy if the specified bucket policy allows public access.
     */
    readonly blockPublicPolicy?: boolean;
    /**
     * S3 Bucket to which this Public Access Block configuration should be applied.
     */
    readonly bucket: string;
    /**
     * Whether Amazon S3 should ignore public ACLs for this bucket. Defaults to `false`. Enabling this setting does not affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set. When set to `true` causes Amazon S3 to:
     * * Ignore all public ACLs on buckets in this account and any objects that they contain.
     */
    readonly ignorePublicAcls?: boolean;
    /**
     * Whether Amazon S3 should restrict public bucket policies for this bucket. Defaults to `false`. Enabling this setting does not affect the previously stored bucket policy, except that public and cross-account access within the public bucket policy, including non-public delegation to specific accounts, is blocked. When set to `true`:
     * * Only the bucket owner and AWS Services can access this buckets if it has a public policy.
     */
    readonly restrictPublicBuckets?: boolean;
}
