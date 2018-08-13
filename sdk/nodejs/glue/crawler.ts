// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Manages a Glue Crawler. More information can be found in the [AWS Glue Develeper Guide](https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html)
 */
export class Crawler extends pulumi.CustomResource {
    /**
     * Get an existing Crawler resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CrawlerState): Crawler {
        return new Crawler(name, <any>state, { id });
    }

    /**
     * List of custom classifiers. By default, all AWS classifiers are included in a crawl, but these custom classifiers always override the default classifiers for a given classification.
     */
    public readonly classifiers: pulumi.Output<string[] | undefined>;
    /**
     * JSON string of configuration information.
     */
    public readonly configuration: pulumi.Output<string | undefined>;
    /**
     * Glue database where results are written.
     */
    public readonly databaseName: pulumi.Output<string>;
    /**
     * Description of the crawler.
     */
    public readonly description: pulumi.Output<string | undefined>;
    /**
     * List of nested DynamoDB target arguments. See below.
     */
    public readonly dynamodbTargets: pulumi.Output<{ path: string }[] | undefined>;
    /**
     * List of nested JBDC target arguments. See below.
     */
    public readonly jdbcTargets: pulumi.Output<{ connectionName: string, exclusions?: string[], path: string }[] | undefined>;
    /**
     * Name of the crawler.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The IAM role (or ARN of an IAM role) used by the crawler to access other resources.
     */
    public readonly role: pulumi.Output<string>;
    /**
     * List nested Amazon S3 target arguments. See below.
     */
    public readonly s3Targets: pulumi.Output<{ exclusions?: string[], path: string }[] | undefined>;
    /**
     * A cron expression used to specify the schedule. For more information, see [Time-Based Schedules for Jobs and Crawlers](https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html). For example, to run something every day at 12:15 UTC, you would specify: `cron(15 12 * * ? *)`.
     */
    public readonly schedule: pulumi.Output<string | undefined>;
    /**
     * Policy for the crawler's update and deletion behavior.
     */
    public readonly schemaChangePolicy: pulumi.Output<{ deleteBehavior?: string, updateBehavior?: string } | undefined>;
    /**
     * The table prefix used for catalog tables that are created.
     */
    public readonly tablePrefix: pulumi.Output<string | undefined>;

    /**
     * Create a Crawler resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CrawlerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CrawlerArgs | CrawlerState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: CrawlerState = argsOrState as CrawlerState | undefined;
            inputs["classifiers"] = state ? state.classifiers : undefined;
            inputs["configuration"] = state ? state.configuration : undefined;
            inputs["databaseName"] = state ? state.databaseName : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["dynamodbTargets"] = state ? state.dynamodbTargets : undefined;
            inputs["jdbcTargets"] = state ? state.jdbcTargets : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["role"] = state ? state.role : undefined;
            inputs["s3Targets"] = state ? state.s3Targets : undefined;
            inputs["schedule"] = state ? state.schedule : undefined;
            inputs["schemaChangePolicy"] = state ? state.schemaChangePolicy : undefined;
            inputs["tablePrefix"] = state ? state.tablePrefix : undefined;
        } else {
            const args = argsOrState as CrawlerArgs | undefined;
            if (!args || args.databaseName === undefined) {
                throw new Error("Missing required property 'databaseName'");
            }
            if (!args || args.role === undefined) {
                throw new Error("Missing required property 'role'");
            }
            inputs["classifiers"] = args ? args.classifiers : undefined;
            inputs["configuration"] = args ? args.configuration : undefined;
            inputs["databaseName"] = args ? args.databaseName : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["dynamodbTargets"] = args ? args.dynamodbTargets : undefined;
            inputs["jdbcTargets"] = args ? args.jdbcTargets : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["role"] = args ? args.role : undefined;
            inputs["s3Targets"] = args ? args.s3Targets : undefined;
            inputs["schedule"] = args ? args.schedule : undefined;
            inputs["schemaChangePolicy"] = args ? args.schemaChangePolicy : undefined;
            inputs["tablePrefix"] = args ? args.tablePrefix : undefined;
        }
        super("aws:glue/crawler:Crawler", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Crawler resources.
 */
export interface CrawlerState {
    /**
     * List of custom classifiers. By default, all AWS classifiers are included in a crawl, but these custom classifiers always override the default classifiers for a given classification.
     */
    readonly classifiers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * JSON string of configuration information.
     */
    readonly configuration?: pulumi.Input<string>;
    /**
     * Glue database where results are written.
     */
    readonly databaseName?: pulumi.Input<string>;
    /**
     * Description of the crawler.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * List of nested DynamoDB target arguments. See below.
     */
    readonly dynamodbTargets?: pulumi.Input<pulumi.Input<{ path: pulumi.Input<string> }>[]>;
    /**
     * List of nested JBDC target arguments. See below.
     */
    readonly jdbcTargets?: pulumi.Input<pulumi.Input<{ connectionName: pulumi.Input<string>, exclusions?: pulumi.Input<pulumi.Input<string>[]>, path: pulumi.Input<string> }>[]>;
    /**
     * Name of the crawler.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The IAM role (or ARN of an IAM role) used by the crawler to access other resources.
     */
    readonly role?: pulumi.Input<string>;
    /**
     * List nested Amazon S3 target arguments. See below.
     */
    readonly s3Targets?: pulumi.Input<pulumi.Input<{ exclusions?: pulumi.Input<pulumi.Input<string>[]>, path: pulumi.Input<string> }>[]>;
    /**
     * A cron expression used to specify the schedule. For more information, see [Time-Based Schedules for Jobs and Crawlers](https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html). For example, to run something every day at 12:15 UTC, you would specify: `cron(15 12 * * ? *)`.
     */
    readonly schedule?: pulumi.Input<string>;
    /**
     * Policy for the crawler's update and deletion behavior.
     */
    readonly schemaChangePolicy?: pulumi.Input<{ deleteBehavior?: pulumi.Input<string>, updateBehavior?: pulumi.Input<string> }>;
    /**
     * The table prefix used for catalog tables that are created.
     */
    readonly tablePrefix?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Crawler resource.
 */
export interface CrawlerArgs {
    /**
     * List of custom classifiers. By default, all AWS classifiers are included in a crawl, but these custom classifiers always override the default classifiers for a given classification.
     */
    readonly classifiers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * JSON string of configuration information.
     */
    readonly configuration?: pulumi.Input<string>;
    /**
     * Glue database where results are written.
     */
    readonly databaseName: pulumi.Input<string>;
    /**
     * Description of the crawler.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * List of nested DynamoDB target arguments. See below.
     */
    readonly dynamodbTargets?: pulumi.Input<pulumi.Input<{ path: pulumi.Input<string> }>[]>;
    /**
     * List of nested JBDC target arguments. See below.
     */
    readonly jdbcTargets?: pulumi.Input<pulumi.Input<{ connectionName: pulumi.Input<string>, exclusions?: pulumi.Input<pulumi.Input<string>[]>, path: pulumi.Input<string> }>[]>;
    /**
     * Name of the crawler.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The IAM role (or ARN of an IAM role) used by the crawler to access other resources.
     */
    readonly role: pulumi.Input<string>;
    /**
     * List nested Amazon S3 target arguments. See below.
     */
    readonly s3Targets?: pulumi.Input<pulumi.Input<{ exclusions?: pulumi.Input<pulumi.Input<string>[]>, path: pulumi.Input<string> }>[]>;
    /**
     * A cron expression used to specify the schedule. For more information, see [Time-Based Schedules for Jobs and Crawlers](https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html). For example, to run something every day at 12:15 UTC, you would specify: `cron(15 12 * * ? *)`.
     */
    readonly schedule?: pulumi.Input<string>;
    /**
     * Policy for the crawler's update and deletion behavior.
     */
    readonly schemaChangePolicy?: pulumi.Input<{ deleteBehavior?: pulumi.Input<string>, updateBehavior?: pulumi.Input<string> }>;
    /**
     * The table prefix used for catalog tables that are created.
     */
    readonly tablePrefix?: pulumi.Input<string>;
}
