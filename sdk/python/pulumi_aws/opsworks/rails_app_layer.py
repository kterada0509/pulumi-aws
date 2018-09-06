# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class RailsAppLayer(pulumi.CustomResource):
    """
    Provides an OpsWorks Ruby on Rails application layer resource.
    """
    def __init__(__self__, __name__, __opts__=None, app_server=None, auto_assign_elastic_ips=None, auto_assign_public_ips=None, auto_healing=None, bundler_version=None, custom_configure_recipes=None, custom_deploy_recipes=None, custom_instance_profile_arn=None, custom_json=None, custom_security_group_ids=None, custom_setup_recipes=None, custom_shutdown_recipes=None, custom_undeploy_recipes=None, drain_elb_on_shutdown=None, ebs_volumes=None, elastic_load_balancer=None, install_updates_on_boot=None, instance_shutdown_timeout=None, manage_bundler=None, name=None, passenger_version=None, ruby_version=None, rubygems_version=None, stack_id=None, system_packages=None, use_ebs_optimized_instances=None):
        """Create a RailsAppLayer resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if app_server and not isinstance(app_server, basestring):
            raise TypeError('Expected property app_server to be a basestring')
        __self__.app_server = app_server
        """
        Keyword for the app server to use. Defaults to "apache_passenger".
        """
        __props__['appServer'] = app_server

        if auto_assign_elastic_ips and not isinstance(auto_assign_elastic_ips, bool):
            raise TypeError('Expected property auto_assign_elastic_ips to be a bool')
        __self__.auto_assign_elastic_ips = auto_assign_elastic_ips
        """
        Whether to automatically assign an elastic IP address to the layer's instances.
        """
        __props__['autoAssignElasticIps'] = auto_assign_elastic_ips

        if auto_assign_public_ips and not isinstance(auto_assign_public_ips, bool):
            raise TypeError('Expected property auto_assign_public_ips to be a bool')
        __self__.auto_assign_public_ips = auto_assign_public_ips
        """
        For stacks belonging to a VPC, whether to automatically assign a public IP address to each of the layer's instances.
        """
        __props__['autoAssignPublicIps'] = auto_assign_public_ips

        if auto_healing and not isinstance(auto_healing, bool):
            raise TypeError('Expected property auto_healing to be a bool')
        __self__.auto_healing = auto_healing
        """
        Whether to enable auto-healing for the layer.
        """
        __props__['autoHealing'] = auto_healing

        if bundler_version and not isinstance(bundler_version, basestring):
            raise TypeError('Expected property bundler_version to be a basestring')
        __self__.bundler_version = bundler_version
        """
        When OpsWorks is managing Bundler, which version to use. Defaults to "1.5.3".
        """
        __props__['bundlerVersion'] = bundler_version

        if custom_configure_recipes and not isinstance(custom_configure_recipes, list):
            raise TypeError('Expected property custom_configure_recipes to be a list')
        __self__.custom_configure_recipes = custom_configure_recipes
        __props__['customConfigureRecipes'] = custom_configure_recipes

        if custom_deploy_recipes and not isinstance(custom_deploy_recipes, list):
            raise TypeError('Expected property custom_deploy_recipes to be a list')
        __self__.custom_deploy_recipes = custom_deploy_recipes
        __props__['customDeployRecipes'] = custom_deploy_recipes

        if custom_instance_profile_arn and not isinstance(custom_instance_profile_arn, basestring):
            raise TypeError('Expected property custom_instance_profile_arn to be a basestring')
        __self__.custom_instance_profile_arn = custom_instance_profile_arn
        """
        The ARN of an IAM profile that will be used for the layer's instances.
        """
        __props__['customInstanceProfileArn'] = custom_instance_profile_arn

        if custom_json and not isinstance(custom_json, basestring):
            raise TypeError('Expected property custom_json to be a basestring')
        __self__.custom_json = custom_json
        """
        Custom JSON attributes to apply to the layer.
        """
        __props__['customJson'] = custom_json

        if custom_security_group_ids and not isinstance(custom_security_group_ids, list):
            raise TypeError('Expected property custom_security_group_ids to be a list')
        __self__.custom_security_group_ids = custom_security_group_ids
        """
        Ids for a set of security groups to apply to the layer's instances.
        """
        __props__['customSecurityGroupIds'] = custom_security_group_ids

        if custom_setup_recipes and not isinstance(custom_setup_recipes, list):
            raise TypeError('Expected property custom_setup_recipes to be a list')
        __self__.custom_setup_recipes = custom_setup_recipes
        __props__['customSetupRecipes'] = custom_setup_recipes

        if custom_shutdown_recipes and not isinstance(custom_shutdown_recipes, list):
            raise TypeError('Expected property custom_shutdown_recipes to be a list')
        __self__.custom_shutdown_recipes = custom_shutdown_recipes
        __props__['customShutdownRecipes'] = custom_shutdown_recipes

        if custom_undeploy_recipes and not isinstance(custom_undeploy_recipes, list):
            raise TypeError('Expected property custom_undeploy_recipes to be a list')
        __self__.custom_undeploy_recipes = custom_undeploy_recipes
        __props__['customUndeployRecipes'] = custom_undeploy_recipes

        if drain_elb_on_shutdown and not isinstance(drain_elb_on_shutdown, bool):
            raise TypeError('Expected property drain_elb_on_shutdown to be a bool')
        __self__.drain_elb_on_shutdown = drain_elb_on_shutdown
        """
        Whether to enable Elastic Load Balancing connection draining.
        """
        __props__['drainElbOnShutdown'] = drain_elb_on_shutdown

        if ebs_volumes and not isinstance(ebs_volumes, list):
            raise TypeError('Expected property ebs_volumes to be a list')
        __self__.ebs_volumes = ebs_volumes
        """
        `ebs_volume` blocks, as described below, will each create an EBS volume and connect it to the layer's instances.
        """
        __props__['ebsVolumes'] = ebs_volumes

        if elastic_load_balancer and not isinstance(elastic_load_balancer, basestring):
            raise TypeError('Expected property elastic_load_balancer to be a basestring')
        __self__.elastic_load_balancer = elastic_load_balancer
        """
        Name of an Elastic Load Balancer to attach to this layer
        """
        __props__['elasticLoadBalancer'] = elastic_load_balancer

        if install_updates_on_boot and not isinstance(install_updates_on_boot, bool):
            raise TypeError('Expected property install_updates_on_boot to be a bool')
        __self__.install_updates_on_boot = install_updates_on_boot
        """
        Whether to install OS and package updates on each instance when it boots.
        """
        __props__['installUpdatesOnBoot'] = install_updates_on_boot

        if instance_shutdown_timeout and not isinstance(instance_shutdown_timeout, int):
            raise TypeError('Expected property instance_shutdown_timeout to be a int')
        __self__.instance_shutdown_timeout = instance_shutdown_timeout
        """
        The time, in seconds, that OpsWorks will wait for Chef to complete after triggering the Shutdown event.
        """
        __props__['instanceShutdownTimeout'] = instance_shutdown_timeout

        if manage_bundler and not isinstance(manage_bundler, bool):
            raise TypeError('Expected property manage_bundler to be a bool')
        __self__.manage_bundler = manage_bundler
        """
        Whether OpsWorks should manage bundler. On by default.
        """
        __props__['manageBundler'] = manage_bundler

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        A human-readable name for the layer.
        """
        __props__['name'] = name

        if passenger_version and not isinstance(passenger_version, basestring):
            raise TypeError('Expected property passenger_version to be a basestring')
        __self__.passenger_version = passenger_version
        """
        The version of Passenger to use. Defaults to "4.0.46".
        """
        __props__['passengerVersion'] = passenger_version

        if ruby_version and not isinstance(ruby_version, basestring):
            raise TypeError('Expected property ruby_version to be a basestring')
        __self__.ruby_version = ruby_version
        """
        The version of Ruby to use. Defaults to "2.0.0".
        """
        __props__['rubyVersion'] = ruby_version

        if rubygems_version and not isinstance(rubygems_version, basestring):
            raise TypeError('Expected property rubygems_version to be a basestring')
        __self__.rubygems_version = rubygems_version
        """
        The version of RubyGems to use. Defaults to "2.2.2".
        """
        __props__['rubygemsVersion'] = rubygems_version

        if not stack_id:
            raise TypeError('Missing required property stack_id')
        elif not isinstance(stack_id, basestring):
            raise TypeError('Expected property stack_id to be a basestring')
        __self__.stack_id = stack_id
        """
        The id of the stack the layer will belong to.
        """
        __props__['stackId'] = stack_id

        if system_packages and not isinstance(system_packages, list):
            raise TypeError('Expected property system_packages to be a list')
        __self__.system_packages = system_packages
        """
        Names of a set of system packages to install on the layer's instances.
        """
        __props__['systemPackages'] = system_packages

        if use_ebs_optimized_instances and not isinstance(use_ebs_optimized_instances, bool):
            raise TypeError('Expected property use_ebs_optimized_instances to be a bool')
        __self__.use_ebs_optimized_instances = use_ebs_optimized_instances
        """
        Whether to use EBS-optimized instances.
        """
        __props__['useEbsOptimizedInstances'] = use_ebs_optimized_instances

        super(RailsAppLayer, __self__).__init__(
            'aws:opsworks/railsAppLayer:RailsAppLayer',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'appServer' in outs:
            self.app_server = outs['appServer']
        if 'autoAssignElasticIps' in outs:
            self.auto_assign_elastic_ips = outs['autoAssignElasticIps']
        if 'autoAssignPublicIps' in outs:
            self.auto_assign_public_ips = outs['autoAssignPublicIps']
        if 'autoHealing' in outs:
            self.auto_healing = outs['autoHealing']
        if 'bundlerVersion' in outs:
            self.bundler_version = outs['bundlerVersion']
        if 'customConfigureRecipes' in outs:
            self.custom_configure_recipes = outs['customConfigureRecipes']
        if 'customDeployRecipes' in outs:
            self.custom_deploy_recipes = outs['customDeployRecipes']
        if 'customInstanceProfileArn' in outs:
            self.custom_instance_profile_arn = outs['customInstanceProfileArn']
        if 'customJson' in outs:
            self.custom_json = outs['customJson']
        if 'customSecurityGroupIds' in outs:
            self.custom_security_group_ids = outs['customSecurityGroupIds']
        if 'customSetupRecipes' in outs:
            self.custom_setup_recipes = outs['customSetupRecipes']
        if 'customShutdownRecipes' in outs:
            self.custom_shutdown_recipes = outs['customShutdownRecipes']
        if 'customUndeployRecipes' in outs:
            self.custom_undeploy_recipes = outs['customUndeployRecipes']
        if 'drainElbOnShutdown' in outs:
            self.drain_elb_on_shutdown = outs['drainElbOnShutdown']
        if 'ebsVolumes' in outs:
            self.ebs_volumes = outs['ebsVolumes']
        if 'elasticLoadBalancer' in outs:
            self.elastic_load_balancer = outs['elasticLoadBalancer']
        if 'installUpdatesOnBoot' in outs:
            self.install_updates_on_boot = outs['installUpdatesOnBoot']
        if 'instanceShutdownTimeout' in outs:
            self.instance_shutdown_timeout = outs['instanceShutdownTimeout']
        if 'manageBundler' in outs:
            self.manage_bundler = outs['manageBundler']
        if 'name' in outs:
            self.name = outs['name']
        if 'passengerVersion' in outs:
            self.passenger_version = outs['passengerVersion']
        if 'rubyVersion' in outs:
            self.ruby_version = outs['rubyVersion']
        if 'rubygemsVersion' in outs:
            self.rubygems_version = outs['rubygemsVersion']
        if 'stackId' in outs:
            self.stack_id = outs['stackId']
        if 'systemPackages' in outs:
            self.system_packages = outs['systemPackages']
        if 'useEbsOptimizedInstances' in outs:
            self.use_ebs_optimized_instances = outs['useEbsOptimizedInstances']
