// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package docdb

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Manages a DocDB Cluster.
// 
// Changes to a DocDB Cluster can occur when you manually change a
// parameter, such as `port`, and are reflected in the next maintenance
// window. Because of this, Terraform may report a difference in its planning
// phase because a modification has not yet taken place. You can use the
// `apply_immediately` flag to instruct the service to apply the change immediately
// (see documentation below).
// 
// > **Note:** using `apply_immediately` can result in a brief downtime as the server reboots.
// > **Note:** All arguments including the username and password will be stored in the raw state as plain-text.
// [Read more about sensitive data in state](https://www.terraform.io/docs/state/sensitive-data.html).
type Cluster struct {
	s *pulumi.ResourceState
}

// NewCluster registers a new resource with the given unique name, arguments, and options.
func NewCluster(ctx *pulumi.Context,
	name string, args *ClusterArgs, opts ...pulumi.ResourceOpt) (*Cluster, error) {
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["applyImmediately"] = nil
		inputs["availabilityZones"] = nil
		inputs["backupRetentionPeriod"] = nil
		inputs["clusterIdentifier"] = nil
		inputs["clusterIdentifierPrefix"] = nil
		inputs["clusterMembers"] = nil
		inputs["dbClusterParameterGroupName"] = nil
		inputs["dbSubnetGroupName"] = nil
		inputs["enabledCloudwatchLogsExports"] = nil
		inputs["engine"] = nil
		inputs["engineVersion"] = nil
		inputs["finalSnapshotIdentifier"] = nil
		inputs["kmsKeyId"] = nil
		inputs["masterPassword"] = nil
		inputs["masterUsername"] = nil
		inputs["port"] = nil
		inputs["preferredBackupWindow"] = nil
		inputs["preferredMaintenanceWindow"] = nil
		inputs["skipFinalSnapshot"] = nil
		inputs["snapshotIdentifier"] = nil
		inputs["storageEncrypted"] = nil
		inputs["tags"] = nil
		inputs["vpcSecurityGroupIds"] = nil
	} else {
		inputs["applyImmediately"] = args.ApplyImmediately
		inputs["availabilityZones"] = args.AvailabilityZones
		inputs["backupRetentionPeriod"] = args.BackupRetentionPeriod
		inputs["clusterIdentifier"] = args.ClusterIdentifier
		inputs["clusterIdentifierPrefix"] = args.ClusterIdentifierPrefix
		inputs["clusterMembers"] = args.ClusterMembers
		inputs["dbClusterParameterGroupName"] = args.DbClusterParameterGroupName
		inputs["dbSubnetGroupName"] = args.DbSubnetGroupName
		inputs["enabledCloudwatchLogsExports"] = args.EnabledCloudwatchLogsExports
		inputs["engine"] = args.Engine
		inputs["engineVersion"] = args.EngineVersion
		inputs["finalSnapshotIdentifier"] = args.FinalSnapshotIdentifier
		inputs["kmsKeyId"] = args.KmsKeyId
		inputs["masterPassword"] = args.MasterPassword
		inputs["masterUsername"] = args.MasterUsername
		inputs["port"] = args.Port
		inputs["preferredBackupWindow"] = args.PreferredBackupWindow
		inputs["preferredMaintenanceWindow"] = args.PreferredMaintenanceWindow
		inputs["skipFinalSnapshot"] = args.SkipFinalSnapshot
		inputs["snapshotIdentifier"] = args.SnapshotIdentifier
		inputs["storageEncrypted"] = args.StorageEncrypted
		inputs["tags"] = args.Tags
		inputs["vpcSecurityGroupIds"] = args.VpcSecurityGroupIds
	}
	inputs["arn"] = nil
	inputs["clusterResourceId"] = nil
	inputs["endpoint"] = nil
	inputs["hostedZoneId"] = nil
	inputs["readerEndpoint"] = nil
	s, err := ctx.RegisterResource("aws:docdb/cluster:Cluster", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Cluster{s: s}, nil
}

// GetCluster gets an existing Cluster resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCluster(ctx *pulumi.Context,
	name string, id pulumi.ID, state *ClusterState, opts ...pulumi.ResourceOpt) (*Cluster, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["applyImmediately"] = state.ApplyImmediately
		inputs["arn"] = state.Arn
		inputs["availabilityZones"] = state.AvailabilityZones
		inputs["backupRetentionPeriod"] = state.BackupRetentionPeriod
		inputs["clusterIdentifier"] = state.ClusterIdentifier
		inputs["clusterIdentifierPrefix"] = state.ClusterIdentifierPrefix
		inputs["clusterMembers"] = state.ClusterMembers
		inputs["clusterResourceId"] = state.ClusterResourceId
		inputs["dbClusterParameterGroupName"] = state.DbClusterParameterGroupName
		inputs["dbSubnetGroupName"] = state.DbSubnetGroupName
		inputs["enabledCloudwatchLogsExports"] = state.EnabledCloudwatchLogsExports
		inputs["endpoint"] = state.Endpoint
		inputs["engine"] = state.Engine
		inputs["engineVersion"] = state.EngineVersion
		inputs["finalSnapshotIdentifier"] = state.FinalSnapshotIdentifier
		inputs["hostedZoneId"] = state.HostedZoneId
		inputs["kmsKeyId"] = state.KmsKeyId
		inputs["masterPassword"] = state.MasterPassword
		inputs["masterUsername"] = state.MasterUsername
		inputs["port"] = state.Port
		inputs["preferredBackupWindow"] = state.PreferredBackupWindow
		inputs["preferredMaintenanceWindow"] = state.PreferredMaintenanceWindow
		inputs["readerEndpoint"] = state.ReaderEndpoint
		inputs["skipFinalSnapshot"] = state.SkipFinalSnapshot
		inputs["snapshotIdentifier"] = state.SnapshotIdentifier
		inputs["storageEncrypted"] = state.StorageEncrypted
		inputs["tags"] = state.Tags
		inputs["vpcSecurityGroupIds"] = state.VpcSecurityGroupIds
	}
	s, err := ctx.ReadResource("aws:docdb/cluster:Cluster", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Cluster{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Cluster) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Cluster) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// Specifies whether any cluster modifications
// are applied immediately, or during the next maintenance window. Default is
// `false`.
func (r *Cluster) ApplyImmediately() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["applyImmediately"])
}

// Amazon Resource Name (ARN) of cluster
func (r *Cluster) Arn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["arn"])
}

// A list of EC2 Availability Zones that
// instances in the DB cluster can be created in.
func (r *Cluster) AvailabilityZones() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["availabilityZones"])
}

// The days to retain backups for. Default `1`
func (r *Cluster) BackupRetentionPeriod() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["backupRetentionPeriod"])
}

// The cluster identifier. If omitted, Terraform will assign a random, unique identifier.
func (r *Cluster) ClusterIdentifier() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["clusterIdentifier"])
}

// Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifer`.
func (r *Cluster) ClusterIdentifierPrefix() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["clusterIdentifierPrefix"])
}

// List of DocDB Instances that are a part of this cluster
func (r *Cluster) ClusterMembers() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["clusterMembers"])
}

// The DocDB Cluster Resource ID
func (r *Cluster) ClusterResourceId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["clusterResourceId"])
}

// A cluster parameter group to associate with the cluster.
func (r *Cluster) DbClusterParameterGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["dbClusterParameterGroupName"])
}

// A DB subnet group to associate with this DB instance.
func (r *Cluster) DbSubnetGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["dbSubnetGroupName"])
}

// List of log types to export to cloudwatch. If omitted, no logs will be exported.
// The following log types are supported: `audit`.
func (r *Cluster) EnabledCloudwatchLogsExports() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["enabledCloudwatchLogsExports"])
}

// The DNS address of the DocDB instance
func (r *Cluster) Endpoint() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["endpoint"])
}

// The name of the database engine to be used for this DB cluster. Defaults to `docdb`. Valid Values: `docdb`
func (r *Cluster) Engine() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["engine"])
}

// The database engine version. Updating this argument results in an outage.
func (r *Cluster) EngineVersion() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["engineVersion"])
}

// The name of your final DB snapshot
// when this DB cluster is deleted. If omitted, no final snapshot will be
// made.
func (r *Cluster) FinalSnapshotIdentifier() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["finalSnapshotIdentifier"])
}

// The Route53 Hosted Zone ID of the endpoint
func (r *Cluster) HostedZoneId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["hostedZoneId"])
}

// The ARN for the KMS encryption key. When specifying `kms_key_id`, `storage_encrypted` needs to be set to true.
func (r *Cluster) KmsKeyId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["kmsKeyId"])
}

// Password for the master DB user. Note that this may
// show up in logs, and it will be stored in the state file. Please refer to the DocDB Naming Constraints.
func (r *Cluster) MasterPassword() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["masterPassword"])
}

// Username for the master DB user. 
func (r *Cluster) MasterUsername() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["masterUsername"])
}

// The port on which the DB accepts connections
func (r *Cluster) Port() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["port"])
}

// The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter.Time in UTC
// Default: A 30-minute window selected at random from an 8-hour block of time per region. e.g. 04:00-09:00
func (r *Cluster) PreferredBackupWindow() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["preferredBackupWindow"])
}

func (r *Cluster) PreferredMaintenanceWindow() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["preferredMaintenanceWindow"])
}

// A read-only endpoint for the DocDB cluster, automatically load-balanced across replicas
func (r *Cluster) ReaderEndpoint() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["readerEndpoint"])
}

// Determines whether a final DB snapshot is created before the DB cluster is deleted. If true is specified, no DB snapshot is created. If false is specified, a DB snapshot is created before the DB cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`.
func (r *Cluster) SkipFinalSnapshot() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["skipFinalSnapshot"])
}

// Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a DB cluster snapshot, or the ARN when specifying a DB snapshot.
func (r *Cluster) SnapshotIdentifier() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["snapshotIdentifier"])
}

// Specifies whether the DB cluster is encrypted. The default is `false`.
func (r *Cluster) StorageEncrypted() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["storageEncrypted"])
}

// A mapping of tags to assign to the DB cluster.
func (r *Cluster) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// List of VPC security groups to associate
// with the Cluster
func (r *Cluster) VpcSecurityGroupIds() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["vpcSecurityGroupIds"])
}

// Input properties used for looking up and filtering Cluster resources.
type ClusterState struct {
	// Specifies whether any cluster modifications
	// are applied immediately, or during the next maintenance window. Default is
	// `false`.
	ApplyImmediately interface{}
	// Amazon Resource Name (ARN) of cluster
	Arn interface{}
	// A list of EC2 Availability Zones that
	// instances in the DB cluster can be created in.
	AvailabilityZones interface{}
	// The days to retain backups for. Default `1`
	BackupRetentionPeriod interface{}
	// The cluster identifier. If omitted, Terraform will assign a random, unique identifier.
	ClusterIdentifier interface{}
	// Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifer`.
	ClusterIdentifierPrefix interface{}
	// List of DocDB Instances that are a part of this cluster
	ClusterMembers interface{}
	// The DocDB Cluster Resource ID
	ClusterResourceId interface{}
	// A cluster parameter group to associate with the cluster.
	DbClusterParameterGroupName interface{}
	// A DB subnet group to associate with this DB instance.
	DbSubnetGroupName interface{}
	// List of log types to export to cloudwatch. If omitted, no logs will be exported.
	// The following log types are supported: `audit`.
	EnabledCloudwatchLogsExports interface{}
	// The DNS address of the DocDB instance
	Endpoint interface{}
	// The name of the database engine to be used for this DB cluster. Defaults to `docdb`. Valid Values: `docdb`
	Engine interface{}
	// The database engine version. Updating this argument results in an outage.
	EngineVersion interface{}
	// The name of your final DB snapshot
	// when this DB cluster is deleted. If omitted, no final snapshot will be
	// made.
	FinalSnapshotIdentifier interface{}
	// The Route53 Hosted Zone ID of the endpoint
	HostedZoneId interface{}
	// The ARN for the KMS encryption key. When specifying `kms_key_id`, `storage_encrypted` needs to be set to true.
	KmsKeyId interface{}
	// Password for the master DB user. Note that this may
	// show up in logs, and it will be stored in the state file. Please refer to the DocDB Naming Constraints.
	MasterPassword interface{}
	// Username for the master DB user. 
	MasterUsername interface{}
	// The port on which the DB accepts connections
	Port interface{}
	// The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter.Time in UTC
	// Default: A 30-minute window selected at random from an 8-hour block of time per region. e.g. 04:00-09:00
	PreferredBackupWindow interface{}
	PreferredMaintenanceWindow interface{}
	// A read-only endpoint for the DocDB cluster, automatically load-balanced across replicas
	ReaderEndpoint interface{}
	// Determines whether a final DB snapshot is created before the DB cluster is deleted. If true is specified, no DB snapshot is created. If false is specified, a DB snapshot is created before the DB cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`.
	SkipFinalSnapshot interface{}
	// Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a DB cluster snapshot, or the ARN when specifying a DB snapshot.
	SnapshotIdentifier interface{}
	// Specifies whether the DB cluster is encrypted. The default is `false`.
	StorageEncrypted interface{}
	// A mapping of tags to assign to the DB cluster.
	Tags interface{}
	// List of VPC security groups to associate
	// with the Cluster
	VpcSecurityGroupIds interface{}
}

// The set of arguments for constructing a Cluster resource.
type ClusterArgs struct {
	// Specifies whether any cluster modifications
	// are applied immediately, or during the next maintenance window. Default is
	// `false`.
	ApplyImmediately interface{}
	// A list of EC2 Availability Zones that
	// instances in the DB cluster can be created in.
	AvailabilityZones interface{}
	// The days to retain backups for. Default `1`
	BackupRetentionPeriod interface{}
	// The cluster identifier. If omitted, Terraform will assign a random, unique identifier.
	ClusterIdentifier interface{}
	// Creates a unique cluster identifier beginning with the specified prefix. Conflicts with `cluster_identifer`.
	ClusterIdentifierPrefix interface{}
	// List of DocDB Instances that are a part of this cluster
	ClusterMembers interface{}
	// A cluster parameter group to associate with the cluster.
	DbClusterParameterGroupName interface{}
	// A DB subnet group to associate with this DB instance.
	DbSubnetGroupName interface{}
	// List of log types to export to cloudwatch. If omitted, no logs will be exported.
	// The following log types are supported: `audit`.
	EnabledCloudwatchLogsExports interface{}
	// The name of the database engine to be used for this DB cluster. Defaults to `docdb`. Valid Values: `docdb`
	Engine interface{}
	// The database engine version. Updating this argument results in an outage.
	EngineVersion interface{}
	// The name of your final DB snapshot
	// when this DB cluster is deleted. If omitted, no final snapshot will be
	// made.
	FinalSnapshotIdentifier interface{}
	// The ARN for the KMS encryption key. When specifying `kms_key_id`, `storage_encrypted` needs to be set to true.
	KmsKeyId interface{}
	// Password for the master DB user. Note that this may
	// show up in logs, and it will be stored in the state file. Please refer to the DocDB Naming Constraints.
	MasterPassword interface{}
	// Username for the master DB user. 
	MasterUsername interface{}
	// The port on which the DB accepts connections
	Port interface{}
	// The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter.Time in UTC
	// Default: A 30-minute window selected at random from an 8-hour block of time per region. e.g. 04:00-09:00
	PreferredBackupWindow interface{}
	PreferredMaintenanceWindow interface{}
	// Determines whether a final DB snapshot is created before the DB cluster is deleted. If true is specified, no DB snapshot is created. If false is specified, a DB snapshot is created before the DB cluster is deleted, using the value from `final_snapshot_identifier`. Default is `false`.
	SkipFinalSnapshot interface{}
	// Specifies whether or not to create this cluster from a snapshot. You can use either the name or ARN when specifying a DB cluster snapshot, or the ARN when specifying a DB snapshot.
	SnapshotIdentifier interface{}
	// Specifies whether the DB cluster is encrypted. The default is `false`.
	StorageEncrypted interface{}
	// A mapping of tags to assign to the DB cluster.
	Tags interface{}
	// List of VPC security groups to associate
	// with the Cluster
	VpcSecurityGroupIds interface{}
}
