import { useEffect, useState } from 'react';
import {
  Card,
  Title,
  Text,
  Metric,
  ProgressBar,
  BarList,
  Badge,
  Grid,
  Flex,
} from '@tremor/react';
import { Activity, Shield, Clock, AlertTriangle, Database, CheckCircle2 } from 'lucide-react';
import { supabase, TrustScore, TrustMetric, AuditEvent } from '../lib/supabase';

export default function Dashboard() {
  const [trustScore, setTrustScore] = useState<TrustScore | null>(null);
  const [metrics, setMetrics] = useState<TrustMetric[]>([]);
  const [events, setEvents] = useState<AuditEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const { data: scoreData } = await supabase
        .from('trust_scores')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (scoreData) {
        setTrustScore(scoreData);

        const { data: metricsData } = await supabase
          .from('trust_metrics')
          .select('*')
          .eq('trust_score_id', scoreData.id)
          .order('weight', { ascending: false });

        const { data: eventsData } = await supabase
          .from('audit_events')
          .select('*')
          .order('timestamp', { ascending: false })
          .limit(6);

        if (metricsData) setMetrics(metricsData);
        if (eventsData) setEvents(eventsData);
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { color: string; icon: any }> = {
      active: { color: 'emerald', icon: CheckCircle2 },
      calibrating: { color: 'amber', icon: Clock },
      error: { color: 'red', icon: AlertTriangle },
    };

    const config = statusConfig[status] || statusConfig.error;
    const Icon = config.icon;

    return (
      <Badge color={config.color as any} icon={Icon}>
        {status.toUpperCase()}
      </Badge>
    );
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));

    if (hours < 1) return 'Just now';
    if (hours === 1) return '1 hour ago';
    if (hours < 24) return `${hours} hours ago`;

    const days = Math.floor(hours / 24);
    if (days === 1) return '1 day ago';
    return `${days} days ago`;
  };

  const metricsBarList = metrics.map(m => ({
    name: m.metric_name,
    value: m.metric_value,
    icon: () => <Database className="h-4 w-4" />,
  }));

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="text-neutral-400 font-mono text-sm">LOADING SYSTEM DATA...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="border-b border-neutral-800 pb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-neutral-100 mb-2 tracking-tight">
                ALGORITHMIC TRUST MONITOR
              </h1>
              <p className="text-neutral-500 text-sm font-mono">
                SYSTEM RELIABILITY INDEX / REAL-TIME METRICS
              </p>
            </div>
            {trustScore && (
              <div className="text-right">
                {getStatusBadge(trustScore.status)}
                <div className="text-xs text-neutral-600 mt-2 font-mono">
                  LAST UPDATE: {new Date(trustScore.updated_at).toLocaleTimeString('en-GB')}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Trust Score */}
        {trustScore && (
          <Card className="bg-neutral-900 border-neutral-800">
            <Flex alignItems="start">
              <div className="flex-1">
                <Text className="text-neutral-500 text-xs font-mono mb-3">
                  PRIMARY TRUST SCORE
                </Text>
                <Metric className="text-neutral-100 font-mono text-6xl tracking-tighter">
                  {trustScore.score.toFixed(1)}
                </Metric>
                <div className="mt-4">
                  <Text className="text-neutral-600 text-xs font-mono mb-2">
                    CONFIDENCE LEVEL: {trustScore.confidence_level.toFixed(1)}%
                  </Text>
                  <ProgressBar
                    value={trustScore.confidence_level}
                    className="mt-2"
                    color="emerald"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center w-32 h-32 border border-neutral-800 rounded">
                <Shield className="h-16 w-16 text-emerald-500" strokeWidth={1} />
              </div>
            </Flex>
          </Card>
        )}

        {/* Metrics Grid */}
        <Grid numItems={1} numItemsMd={2} className="gap-6">
          {/* System Metrics */}
          <Card className="bg-neutral-900 border-neutral-800">
            <div className="flex items-center justify-between mb-4">
              <Title className="text-neutral-100 text-sm font-mono tracking-wide">
                COMPONENT METRICS
              </Title>
              <Activity className="h-5 w-5 text-neutral-600" />
            </div>
            <BarList
              data={metricsBarList}
              className="mt-4"
              color="emerald"
              valueFormatter={(value) => (
                <span className="font-mono text-neutral-300">{value.toFixed(1)}</span>
              )}
            />
          </Card>

          {/* Audit Log */}
          <Card className="bg-neutral-900 border-neutral-800">
            <div className="flex items-center justify-between mb-4">
              <Title className="text-neutral-100 text-sm font-mono tracking-wide">
                AUDIT LOG
              </Title>
              <Clock className="h-5 w-5 text-neutral-600" />
            </div>
            <div className="space-y-3 mt-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="border-l-2 border-neutral-800 pl-3 py-1 hover:border-emerald-700 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-xs text-neutral-400 font-mono mb-1">
                        {event.event_type}
                      </div>
                      <div className="text-sm text-neutral-300">
                        {event.description}
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <div
                        className={`text-xs font-mono ${
                          event.impact_score >= 0
                            ? 'text-emerald-500'
                            : 'text-red-500'
                        }`}
                      >
                        {event.impact_score >= 0 ? '+' : ''}
                        {event.impact_score.toFixed(1)}
                      </div>
                      <div className="text-xs text-neutral-600 mt-1">
                        {formatTimestamp(event.timestamp)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Grid>

        {/* Metrics Detail Cards */}
        <Grid numItems={2} numItemsMd={5} className="gap-4">
          {metrics.map((metric) => (
            <Card
              key={metric.id}
              className="bg-neutral-900 border-neutral-800"
            >
              <Text className="text-neutral-500 text-xs font-mono mb-2">
                {metric.metric_name.toUpperCase()}
              </Text>
              <Metric className="text-neutral-100 font-mono text-2xl">
                {metric.metric_value.toFixed(1)}
              </Metric>
              <Text className="text-neutral-600 text-xs font-mono mt-2">
                WEIGHT: {(metric.weight * 100).toFixed(0)}%
              </Text>
            </Card>
          ))}
        </Grid>
      </div>
    </div>
  );
}
