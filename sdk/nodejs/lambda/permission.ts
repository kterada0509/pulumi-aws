// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

import {Function} from "./function";

/**
 * Creates a Lambda permission to allow external sources invoking the Lambda function
 * (e.g. CloudWatch Event Rule, SNS or S3).
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
     * The AWS Lambda action you want to allow in this statement. (e.g. `lambda:InvokeFunction`)
     */
    public readonly action: pulumi.Output<string>;
    /**
     * The Event Source Token to validate.  Used with [Alexa Skills][1].
     */
    public readonly eventSourceToken: pulumi.Output<string | undefined>;
    /**
     * Name of the Lambda function whose resource policy you are updating
     */
    public readonly function: pulumi.Output<Function>;
    /**
     * The principal who is getting this permission.
     * e.g. `s3.amazonaws.com`, an AWS account ID, or any valid AWS service principal
     * such as `events.amazonaws.com` or `sns.amazonaws.com`.
     */
    public readonly principal: pulumi.Output<string>;
    /**
     * Query parameter to specify function version or alias name.
     * The permission will then apply to the specific qualified ARN.
     * e.g. `arn:aws:lambda:aws-region:acct-id:function:function-name:2`
     */
    public readonly qualifier: pulumi.Output<string | undefined>;
    /**
     * This parameter is used for S3 and SES. The AWS account ID (without a hyphen) of the source owner.
     */
    public readonly sourceAccount: pulumi.Output<string | undefined>;
    /**
     * When granting Amazon S3 or CloudWatch Events permission to
     * invoke your function, you should specify this field with the Amazon Resource Name (ARN)
     * for the S3 Bucket or CloudWatch Events Rule as its value.  This ensures that only events
     * generated from the specified bucket or rule can invoke the function.
     * API Gateway ARNs have a unique structure described
     * [here](http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html).
     */
    public readonly sourceArn: pulumi.Output<string | undefined>;
    /**
     * A unique statement identifier. By default generated by Terraform.
     */
    public readonly statementId: pulumi.Output<string>;
    /**
     * A statement identifier prefix. Terraform will generate a unique suffix. Conflicts with `statement_id`.
     */
    public readonly statementIdPrefix: pulumi.Output<string | undefined>;

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
            inputs["action"] = state ? state.action : undefined;
            inputs["eventSourceToken"] = state ? state.eventSourceToken : undefined;
            inputs["function"] = state ? state.function : undefined;
            inputs["principal"] = state ? state.principal : undefined;
            inputs["qualifier"] = state ? state.qualifier : undefined;
            inputs["sourceAccount"] = state ? state.sourceAccount : undefined;
            inputs["sourceArn"] = state ? state.sourceArn : undefined;
            inputs["statementId"] = state ? state.statementId : undefined;
            inputs["statementIdPrefix"] = state ? state.statementIdPrefix : undefined;
        } else {
            const args = argsOrState as PermissionArgs | undefined;
            if (!args || args.action === undefined) {
                throw new Error("Missing required property 'action'");
            }
            if (!args || args.function === undefined) {
                throw new Error("Missing required property 'function'");
            }
            if (!args || args.principal === undefined) {
                throw new Error("Missing required property 'principal'");
            }
            inputs["action"] = args ? args.action : undefined;
            inputs["eventSourceToken"] = args ? args.eventSourceToken : undefined;
            inputs["function"] = args ? args.function : undefined;
            inputs["principal"] = args ? args.principal : undefined;
            inputs["qualifier"] = args ? args.qualifier : undefined;
            inputs["sourceAccount"] = args ? args.sourceAccount : undefined;
            inputs["sourceArn"] = args ? args.sourceArn : undefined;
            inputs["statementId"] = args ? args.statementId : undefined;
            inputs["statementIdPrefix"] = args ? args.statementIdPrefix : undefined;
        }
        super("aws:lambda/permission:Permission", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Permission resources.
 */
export interface PermissionState {
    /**
     * The AWS Lambda action you want to allow in this statement. (e.g. `lambda:InvokeFunction`)
     */
    readonly action?: pulumi.Input<string>;
    /**
     * The Event Source Token to validate.  Used with [Alexa Skills][1].
     */
    readonly eventSourceToken?: pulumi.Input<string>;
    /**
     * Name of the Lambda function whose resource policy you are updating
     */
    readonly function?: pulumi.Input<Function>;
    /**
     * The principal who is getting this permission.
     * e.g. `s3.amazonaws.com`, an AWS account ID, or any valid AWS service principal
     * such as `events.amazonaws.com` or `sns.amazonaws.com`.
     */
    readonly principal?: pulumi.Input<string>;
    /**
     * Query parameter to specify function version or alias name.
     * The permission will then apply to the specific qualified ARN.
     * e.g. `arn:aws:lambda:aws-region:acct-id:function:function-name:2`
     */
    readonly qualifier?: pulumi.Input<string>;
    /**
     * This parameter is used for S3 and SES. The AWS account ID (without a hyphen) of the source owner.
     */
    readonly sourceAccount?: pulumi.Input<string>;
    /**
     * When granting Amazon S3 or CloudWatch Events permission to
     * invoke your function, you should specify this field with the Amazon Resource Name (ARN)
     * for the S3 Bucket or CloudWatch Events Rule as its value.  This ensures that only events
     * generated from the specified bucket or rule can invoke the function.
     * API Gateway ARNs have a unique structure described
     * [here](http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html).
     */
    readonly sourceArn?: pulumi.Input<string>;
    /**
     * A unique statement identifier. By default generated by Terraform.
     */
    readonly statementId?: pulumi.Input<string>;
    /**
     * A statement identifier prefix. Terraform will generate a unique suffix. Conflicts with `statement_id`.
     */
    readonly statementIdPrefix?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Permission resource.
 */
export interface PermissionArgs {
    /**
     * The AWS Lambda action you want to allow in this statement. (e.g. `lambda:InvokeFunction`)
     */
    readonly action: pulumi.Input<string>;
    /**
     * The Event Source Token to validate.  Used with [Alexa Skills][1].
     */
    readonly eventSourceToken?: pulumi.Input<string>;
    /**
     * Name of the Lambda function whose resource policy you are updating
     */
    readonly function: pulumi.Input<Function>;
    /**
     * The principal who is getting this permission.
     * e.g. `s3.amazonaws.com`, an AWS account ID, or any valid AWS service principal
     * such as `events.amazonaws.com` or `sns.amazonaws.com`.
     */
    readonly principal: pulumi.Input<string>;
    /**
     * Query parameter to specify function version or alias name.
     * The permission will then apply to the specific qualified ARN.
     * e.g. `arn:aws:lambda:aws-region:acct-id:function:function-name:2`
     */
    readonly qualifier?: pulumi.Input<string>;
    /**
     * This parameter is used for S3 and SES. The AWS account ID (without a hyphen) of the source owner.
     */
    readonly sourceAccount?: pulumi.Input<string>;
    /**
     * When granting Amazon S3 or CloudWatch Events permission to
     * invoke your function, you should specify this field with the Amazon Resource Name (ARN)
     * for the S3 Bucket or CloudWatch Events Rule as its value.  This ensures that only events
     * generated from the specified bucket or rule can invoke the function.
     * API Gateway ARNs have a unique structure described
     * [here](http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-control-access-using-iam-policies-to-invoke-api.html).
     */
    readonly sourceArn?: pulumi.Input<string>;
    /**
     * A unique statement identifier. By default generated by Terraform.
     */
    readonly statementId?: pulumi.Input<string>;
    /**
     * A statement identifier prefix. Terraform will generate a unique suffix. Conflicts with `statement_id`.
     */
    readonly statementIdPrefix?: pulumi.Input<string>;
}
